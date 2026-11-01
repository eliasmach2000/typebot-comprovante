import { ImageResponse } from '@vercel/og';

export const runtime = 'edge';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  // Captura dos dados da URL (com valores padrão caso faltem)
  const banco = searchParams.get('banco') || searchParams.get('instituicao') || 'Não informado';
  const chave = searchParams.get('chave') || searchParams.get('chavepix') || 'Não informada';
  const cpf = searchParams.get('cpf') || 'Não informado';
  const data = searchParams.get('data') || searchParams.get('dataehora') || 'Não informada';
  const nome = searchParams.get('nome') || 'Não informado';
  const valor = searchParams.get('valor') || '2480,00';

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#ffffff',
          fontFamily: 'sans-serif',
          padding: '30px',
          boxSizing: 'border-box',
        }}
      >
        {/* Cabeçalho */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '15px',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {/* Logo BTG Pactual */}
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  border: '3px solid #0b1e3d',
                  marginRight: '8px',
                }}
              />
              <span style={{ fontSize: '32px', fontWeight: 'bold', color: '#0b1e3d' }}>
                btg
              </span>
              <span style={{ fontSize: '32px', color: '#0b1e3d', marginLeft: '4px' }}>
                pactual
              </span>
            </div>
            <span style={{ fontSize: '12px', color: '#555555', marginTop: '4px' }}>
              Instituição Financeira Autorizada CNPJ: 30.306.294/0001-45
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
            <span style={{ fontSize: '15px', fontWeight: 'bold', color: '#0b1e3d' }}>
              COMPROVANTE DE TRANSFERÊNCIA
            </span>
            <span style={{ fontSize: '11px', color: '#666666', marginTop: '2px' }}>
              Conforme a Medida Provisória nº 1,394/2026
            </span>
          </div>
        </div>

        {/* Faixa Azul Principal */}
        <div
          style={{
            backgroundColor: '#0b1e3d',
            color: '#ffffff',
            textAlign: 'center',
            padding: '10px 0',
            fontWeight: 'bold',
            fontSize: '18px',
            letterSpacing: '0.5px',
            marginBottom: '15px',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          COMPROVANTE DE TRANSFERÊNCIA BANCÁRIA
        </div>

        {/* Seção 1: Dados do Recebedor */}
        <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '15px' }}>
          <span
            style={{
              fontSize: '18px',
              fontWeight: 'bold',
              color: '#0b1e3d',
              textAlign: 'center',
              marginBottom: '8px',
            }}
          >
            1. DADOS DO RECEBEDOR
          </span>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: '#f9fafb',
              border: '1px solid #e5e7eb',
              borderRadius: '4px',
            }}
          >
            <div
              style={{
                display: 'flex',
                padding: '8px 12px',
                borderBottom: '1px solid #e5e7eb',
                fontSize: '14px',
              }}
            >
              <strong style={{ color: '#111827', width: '200px' }}>NOME DO RECEBEDOR:</strong>
              <span style={{ color: '#111827', fontWeight: 'bold' }}>{nome}</span>
            </div>

            <div
              style={{
                display: 'flex',
                padding: '8px 12px',
                borderBottom: '1px solid #e5e7eb',
                fontSize: '14px',
              }}
            >
              <strong style={{ color: '#111827', width: '200px' }}>CPF:</strong>
              <span style={{ color: '#111827', fontWeight: 'bold' }}>{cpf}</span>
            </div>

            <div
              style={{
                display: 'flex',
                padding: '8px 12px',
                borderBottom: '1px solid #e5e7eb',
                fontSize: '14px',
              }}
            >
              <strong style={{ color: '#111827', width: '200px' }}>INSTITUIÇÃO:</strong>
              <span style={{ color: '#111827', fontWeight: 'bold' }}>{banco}</span>
            </div>

            <div style={{ display: 'flex', padding: '8px 12px', fontSize: '14px' }}>
              <strong style={{ color: '#111827', width: '200px' }}>CHAVE PIX:</strong>
              <span style={{ color: '#111827', fontWeight: 'bold' }}>{chave}</span>
            </div>
          </div>
        </div>

        {/* Seção 2: Detalhes da Transação */}
        <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '15px' }}>
          <span
            style={{
              fontSize: '18px',
              fontWeight: 'bold',
              color: '#0b1e3d',
              textAlign: 'center',
              marginBottom: '8px',
            }}
          >
            2. DETALHES DA TRANSAÇÃO
          </span>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: '#f9fafb',
              border: '1px solid #e5e7eb',
              borderRadius: '4px',
            }}
          >
            <div
              style={{
                display: 'flex',
                padding: '8px 12px',
                borderBottom: '1px solid #e5e7eb',
                fontSize: '14px',
                alignItems: 'center',
              }}
            >
              <strong style={{ color: '#111827', width: '200px' }}>VALOR DA TRANSFERÊNCIA:</strong>
              <span style={{ color: '#15803d', fontWeight: 'bold', fontSize: '18px' }}>
                R$ {valor}
              </span>
            </div>

            <div
              style={{
                display: 'flex',
                padding: '8px 12px',
                borderBottom: '1px solid #e5e7eb',
                fontSize: '14px',
              }}
            >
              <strong style={{ color: '#111827', width: '200px' }}>DATA E HORA:</strong>
              <span style={{ color: '#111827', fontWeight: 'bold' }}>{data}</span>
            </div>

            <div
              style={{
                display: 'flex',
                padding: '8px 12px',
                borderBottom: '1px solid #e5e7eb',
                fontSize: '14px',
              }}
            >
              <strong style={{ color: '#111827', width: '200px' }}>TIPO DE TRANSAÇÃO:</strong>
              <span style={{ color: '#374151' }}>PIX - Transferência Instantânea</span>
            </div>

            <div
              style={{
                display: 'flex',
                padding: '8px 12px',
                borderBottom: '1px solid #e5e7eb',
                fontSize: '14px',
              }}
            >
              <strong style={{ color: '#111827', width: '200px' }}>ID DA TRANSAÇÃO / E2E:</strong>
              <span style={{ color: '#374151' }}>E00000000202610251410XyZ891234</span>
            </div>

            <div style={{ display: 'flex', padding: '8px 12px', fontSize: '14px', alignItems: 'center' }}>
              <strong style={{ color: '#111827', width: '200px' }}>SITUAÇÃO:</strong>
              <span style={{ color: '#15803d', fontWeight: 'bold' }}>PROCESSANDO TRANSAÇÃO</span>
            </div>
          </div>
        </div>

        {/* Rodapé de Autenticação */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#f3f4f6',
            padding: '10px 12px',
            borderRadius: '4px',
            marginTop: 'auto',
          }}
        >
          <span style={{ fontSize: '11px', fontWeight: 'bold', color: '#374151' }}>
            AUTENTICAÇÃO BANCÁRIA
          </span>
          <span style={{ fontSize: '11px', color: '#111827', fontWeight: 'bold', marginTop: '2px' }}>
            Código de Autenticação: B71A90E4-3C28-4F81-9102-D84920193E81
          </span>
          <span style={{ fontSize: '10px', color: '#6b7280', marginTop: '2px' }}>
            Esta transação foi processada com segurança pelo Banco BTG Pactual. Os dados acima referem-se a uma transferência via PIX realizada entre contas. Em caso de dúvidas, utilize o código de autenticação nos canais de atendimento oficiais.
          </span>
        </div>
      </div>
    ),
    {
      width: 750,
      height: 700,
    }
  );
}
