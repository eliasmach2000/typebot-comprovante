import { ImageResponse } from '@vercel/og';

export const runtime = 'edge';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  // Carrega a imagem exata salva na pasta public do GitHub
  const bgImage = await fetch(
    new URL('../../../public/certificado.jpg', import.meta.url)
  ).then((res) => res.arrayBuffer());

  // Captura as variáveis enviadas pelo Typebot na URL
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
          fontSize: '15px',
        }}
      >
        {/* Imagem de fundo idêntica ao modelo */}
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
            top: '291px',
            left: '212px',
            display: 'flex',
          }}
        >
          {cpf}
        </div>

        {/* Nome */}
        <div
          style={{
            position: 'absolute',
            top: '327px',
            left: '228px',
            display: 'flex',
          }}
        >
          {nome}
        </div>

        {/* Nascimento */}
        <div
          style={{
            position: 'absolute',
            top: '364px',
            left: '270px',
            display: 'flex',
          }}
        >
          {nascimento}
        </div>

        {/* Sexo */}
        <div
          style={{
            position: 'absolute',
            top: '400px',
            left: '220px',
            display: 'flex',
          }}
        >
          {sexo}
        </div>

        {/* Filiação */}
        <div
          style={{
            position: 'absolute',
            top: '437px',
            left: '242px',
            maxWidth: '520px',
            display: 'flex',
            flexWrap: 'wrap',
          }}
        >
          {filiacao}
        </div>
      </div>
    ),
    {
      width: 800,
      height: 704,
    }
  );
}
