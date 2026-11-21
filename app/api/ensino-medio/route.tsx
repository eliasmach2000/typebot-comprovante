import { ImageResponse } from '@vercel/og';

export const runtime = 'edge';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const bgImage = await fetch(
    new URL('../../../public/certificado.jpg', import.meta.url)
  ).then((res) => res.arrayBuffer());

  const cpf = searchParams.get('CPF') || searchParams.get('cpf') || '';
  const nascimento =
    searchParams.get('DATA') ||
    searchParams.get('data') ||
    searchParams.get('nascimento') ||
    '';
  const nome = searchParams.get('NOME') || searchParams.get('nome') || '';
  const mae = searchParams.get('PAIS') || searchParams.get('mae') || '';
  const pai = searchParams.get('Pais2') || searchParams.get('pai') || '';
  const sexo = searchParams.get('SEXO') || searchParams.get('sexo') || '';

  const filiacao = [mae, pai].filter(Boolean).join(' e ');

  return new ImageResponse(
    (
      <div
        style={{
          width: '800px',
          height: '704px',
          display: 'flex',
          position: 'relative',
          fontFamily: 'sans-serif',
          color: '#111827',
          fontSize: '14px',
          fontWeight: 'bold',
          lineHeight: 1,
        }}
      >
        <img
          src={bgImage as any}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '800px',
            height: '704px',
          }}
        />

        {/* CPF */}
        <div
          style={{
            position: 'absolute',
            top: '296px',
            left: '170px',
            display: 'flex',
            whiteSpace: 'nowrap',
          }}
        >
          {cpf}
        </div>

        {/* Nome */}
        <div
          style={{
            position: 'absolute',
            top: '319px',
            left: '185px',
            display: 'flex',
            whiteSpace: 'nowrap',
          }}
        >
          {nome}
        </div>

        {/* Nascimento */}
        <div
          style={{
            position: 'absolute',
            top: '342px',
            left: '232px',
            display: 'flex',
            whiteSpace: 'nowrap',
          }}
        >
          {nascimento}
        </div>

        {/* Sexo */}
        <div
          style={{
            position: 'absolute',
            top: '365px',
            left: '178px',
            display: 'flex',
            whiteSpace: 'nowrap',
          }}
        >
          {sexo}
        </div>

        {/* Filiação */}
        <div
          style={{
            position: 'absolute',
            top: '388px',
            left: '200px',
            display: 'flex',
            whiteSpace: 'nowrap',
          }}
        >
          {filiacao}
        </div>

        {/* Nome sobre a linha após "Atestamos que" */}
        <div
          style={{
            position: 'absolute',
            top: '447px',
            left: '248px',
            display: 'flex',
            whiteSpace: 'nowrap',
          }}
        >
          {nome}
        </div>
      </div>
    ),
    {
      width: 800,
      height: 704,
    }
  );
}
