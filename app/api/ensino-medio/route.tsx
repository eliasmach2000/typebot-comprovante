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
          fontSize: '13px',
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

        {/* Linha 1: CPF */}
        <div
          style={{
            position: 'absolute',
            top: '291px',
            left: '166px',
            height: '24px',
            display: 'flex',
            alignItems: 'center',
            whiteSpace: 'nowrap',
          }}
        >
          {cpf}
        </div>

        {/* Linha 2: Nome */}
        <div
          style={{
            position: 'absolute',
            top: '315px',
            left: '178px',
            height: '24px',
            display: 'flex',
            alignItems: 'center',
            whiteSpace: 'nowrap',
          }}
        >
          {nome}
        </div>

        {/* Linha 3: Nascimento */}
        <div
          style={{
            position: 'absolute',
            top: '339px',
            left: '221px',
            height: '24px',
            display: 'flex',
            alignItems: 'center',
            whiteSpace: 'nowrap',
          }}
        >
          {nascimento}
        </div>

        {/* Linha 4: Sexo */}
        <div
          style={{
            position: 'absolute',
            top: '363px',
            left: '171px',
            height: '24px',
            display: 'flex',
            alignItems: 'center',
            whiteSpace: 'nowrap',
          }}
        >
          {sexo}
        </div>

        {/* Linha 5: Filiação */}
        <div
          style={{
            position: 'absolute',
            top: '387px',
            left: '191px',
            height: '24px',
            display: 'flex',
            alignItems: 'center',
            whiteSpace: 'nowrap',
          }}
        >
          {filiacao}
        </div>

        {/* Nome sobre a linha após "Atestamos que" */}
        <div
          style={{
            position: 'absolute',
            top: '451px',
            left: '244px',
            display: 'flex',
            alignItems: 'center',
            fontSize: '13.5px',
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
