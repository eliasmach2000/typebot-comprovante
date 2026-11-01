import { ImageResponse } from '@vercel/og';

export const runtime = 'edge';

export async function GET(request) {
  const { searchParams } = new URL(request.url);

  // Captura os dados passados pelo Typebot na URL
  const banco = searchParams.get('banco') || 'Não informado';
  const chave = searchParams.get('chave') || 'Não informada';
  const cpf = searchParams.get('cpf') || 'Não informado';
  const data = searchParams.get('data') || 'Não informada';
  const nome = searchParams.get('nome') || 'Não informado';

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          backgroundColor: '#ffffff',
          padding: '40px',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            border: '2px solid #e5e7eb',
            borderRadius: '16px',
            padding: '30px',
            backgroundColor: '#f9fafb',
          }}
        >
          <h1 style={{ fontSize: '26px', color: '#111827', marginBottom: '20px' }}>
            Comprovante de Pagamento
          </h1>

          <div style={{ display: 'flex', marginBottom: '12px', fontSize: '18px' }}>
            <strong style={{ color: '#4b5563', width: '120px' }}>Nome:</strong>
            <span style={{ color: '#111827', fontWeight: 'bold' }}>{nome}</span>
          </div>

          <div style={{ display: 'flex', marginBottom: '12px', fontSize: '18px' }}>
            <strong style={{ color: '#4b5563', width: '120px' }}>CPF:</strong>
            <span style={{ color: '#111827' }}>{cpf}</span>
          </div>

          <div style={{ display: 'flex', marginBottom: '12px', fontSize: '18px' }}>
            <strong style={{ color: '#4b5563', width: '120px' }}>Banco:</strong>
            <span style={{ color: '#111827' }}>{banco}</span>
          </div>

          <div style={{ display: 'flex', marginBottom: '12px', fontSize: '18px' }}>
            <strong style={{ color: '#4b5563', width: '120px' }}>Chave Pix:</strong>
            <span style={{ color: '#111827' }}>{chave}</span>
          </div>

          <div style={{ display: 'flex', marginTop: '12px', fontSize: '14px', color: '#9ca3af' }}>
            <span>Data: {data}</span>
          </div>
        </div>
      </div>
    ),
    {
      width: 600,
      height: 400,
    }
  );
}
