import './BeerCanvas.css'
import { useRef } from "react";

const BeerCanvas = ({incrementBeerCounter}) => {    
    const canvasRef = useRef(null)

    const drawing = useRef(false)
    const points = useRef([])

    const getPos = (e) => {
        const rect = canvasRef.current.getBoundingClientRect()
        return {
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        }
    }

    const startDraw = (e) => {
      e.preventDefault()

      drawing.current = true
      points.current = [getPos(e)]

      canvasRef.current.setPointerCapture(e.pointerId)
    }

    const draw = (e) => {
    if (!drawing.current) {
        return
    }
 
    const ctx = canvasRef.current.getContext("2d")
    const pos = getPos(e)
    const last = points.current[points.current.length - 1]

    ctx.beginPath()
    ctx.moveTo(last.x, last.y)
    ctx.lineTo(pos.x, pos.y)
    ctx.strokeStyle = "#000"
    ctx.lineWidth = 5
    ctx.lineCap = "round"
    ctx.stroke()

    points.current.push(pos)
  }

  const endDraw = () => {
    if (!drawing.current) return;
 
    drawing.current = false;

    let length = 0;

    for (let i = 1; i < points.current.length; i++) {
    const dx = points.current[i].x - points.current[i - 1].x;
    const dy = points.current[i].y - points.current[i - 1].y;

    length += Math.hypot(dx, dy);
    }

    if (length > 20) {
        incrementBeerCounter(prev => prev + 1)
    }

    const ctx = canvasRef.current.getContext("2d")

    setTimeout(() => {
        ctx.clearRect(
        0,
        0,
        canvasRef.current.width,
        canvasRef.current.height
        );
    }, 100)
  }

  return (
    <div className="beer-canvas-root">
        <canvas
            className="beer-canvas"
            ref={canvasRef}
            width={400}
            height={200}
            onPointerDown={startDraw}
            onPointerMove={draw}
            onPointerUp={endDraw}
            onPointerCancel={endDraw}
        />
    </div>
  )
}

export default BeerCanvas