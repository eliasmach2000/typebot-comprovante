import { NextRequest, NextResponse } from "next/server";
import { createCanvas, registerFont } from "canvas";
import path from "path";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const nome = searchParams.get("nome") || "Nome Exemplo";
  const chave = searchParams.get("chave") || "chave@exemplo.com";

  const width = 800;
  const height = 400;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext("2d");

  ctx.fillStyle = "#f4f4f4";
  ctx.fillRect(0, 0, width, height);

  ctx.fillStyle = "#333";
  ctx.font = "bold 30px Arial";
  ctx.fillText("Comprovante de Pagamento", 200, 80);

  ctx.font = "24px Arial";
  ctx.fillText(`Nome: ${nome}`, 100, 160);
  ctx.fillText(`Chave PIX: ${chave}`, 100, 220);
  ctx.fillText("Status: Pago", 100, 300);

  const buffer = canvas.toBuffer("image/png");

  return new NextResponse(buffer, {
    headers: {
      "Content-Type": "image/png",
    },
  });
}
