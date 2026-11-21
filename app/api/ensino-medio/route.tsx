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
          fontSize: '15px',
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
            top: '272px',
            left: '165px',
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
            top: '304px',
            left: '179px',
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
            top: '336px',
            left: '223px',
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
            top: '368px',
            left: '172px',
            display: 'flex',
            fontWeight: 'bold',
          }}
        >
          {sexo}
        </div>

        {/* Filiação (Mãe e Pai em negrito, com "e" normal) */}
        <div
          style={{
            position: 'absolute',
            top: '400px',
            left: '195px',
            maxWidth: '560px',
            display: 'flex',
            flexWrap: 'wrap',
          }}
        >
          {mae && <span style={{ fontWeight: 'bold' }}>{mae}</span>}
          {mae && pai && <span style={{ margin: '0 5px' }}>e</span>}
          {pai && <span style={{ fontWeight: 'bold' }}>{pai}</span>}
        </div>

        {/* Nome após "Atestamos que" */}
        <div
          style={{
            position: 'absolute',
            top: '464px',
            left: '239px',
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
