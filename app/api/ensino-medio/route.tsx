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
          fontSize: '16px',
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
            left: '214px',
            display: 'flex',
            fontWeight: 'bold',
          }}
        >
          {cpf}
        </div>

        {/* Nome */}
        <div
          style={{
            position: 'absolute',
            top: '332px',
            left: '226px',
            display: 'flex',
            fontWeight: 'bold',
          }}
        >
          {nome}
        </div>

        {/* Nascimento */}
        <div
          style={{
            position: 'absolute',
            top: '368px',
            left: '274px',
            display: 'flex',
            fontWeight: 'bold',
          }}
        >
          {nascimento}
        </div>

        {/* Sexo */}
        <div
          style={{
            position: 'absolute',
            top: '403px',
            left: '220px',
            display: 'flex',
            fontWeight: 'bold',
          }}
        >
          {sexo}
        </div>

        {/* Filiação */}
        <div
          style={{
            position: 'absolute',
            top: '438px',
            left: '244px',
            maxWidth: '520px',
            display: 'flex',
            flexWrap: 'wrap',
            fontWeight: 'bold',
          }}
        >
          {filiacao}
        </div>

        {/* Nome após "Atestamos que" */}
        <div
          style={{
            position: 'absolute',
            top: '491px',
            left: '292px',
            display: 'flex',
            fontWeight: 'bold',
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
