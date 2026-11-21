import { ImageResponse } from '@vercel/og';

export const runtime = 'edge';

function BrasaoSVG({ size = 90, opacity = 1 }: { size?: number; opacity?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      style={{ opacity }}
    >
      {/* Resplendor dourado */}
      <polygon
        points="100,8 118,42 156,28 152,66 188,76 164,106 188,136 152,146 156,184 118,170 100,196 82,170 44,184 48,146 12,136 36,106 12,76 48,66 44,28 82,42"
        fill="#eab308"
        stroke="#ca8a04"
        strokeWidth="2"
      />
      {/* Espada vertical */}
      <rect x="95" y="18" width="10" height="164" rx="3" fill="#94a3b8" />
      <rect x="82" y="152" width="36" height="8" rx="3" fill="#b91c1c" />
      {/* Escudo central azul */}
      <circle cx="100" cy="100" r="46" fill="#1e3a8a" stroke="#eab308" strokeWidth="5" />
      {/* Cruzeiro do Sul e estrelas */}
      <circle cx="100" cy="84" r="3" fill="#ffffff" />
      <circle cx="100" cy="116" r="3" fill="#ffffff" />
      <circle cx="86" cy="100" r="3" fill="#ffffff" />
      <circle cx="114" cy="100" r="3" fill="#ffffff" />
      <circle cx="106" cy="107" r="2.2" fill="#ffffff" />
      {/* Ramos laterais (Café e Tabaco) */}
      <path d="M52,62 Q30,100 55,144" fill="none" stroke="#15803d" strokeWidth="8" strokeLinecap="round" />
      <path d="M148,62 Q170,100 145,144" fill="none" stroke="#15803d" strokeWidth="8" strokeLinecap="round" />
      {/* Faixa inferior */}
      <path d="M42,146 Q100,168 158,146 L152,162 Q100,182 48,162 Z" fill="#1d4ed8" stroke="#eab308" strokeWidth="2" />
    </svg>
  );
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  // Aceita os parâmetros exatos da sua URL antiga (maiúsculos ou minúsculos)
  const cpf = searchParams.get('CPF') || searchParams.get('cpf') || 'Não informado';
  const nascimento = searchParams.get('DATA') || searchParams.get('data') || searchParams.get('nascimento') || 'Não informada';
  const nome = searchParams.get('NOME') || searchParams.get('nome') || 'Não informado';
  const mae = searchParams.get('PAIS') || searchParams.get('mae') || '';
  const pai = searchParams.get('Pais2') || searchParams.get('pai') || '';
  const sexo = searchParams.get('SEXO') || searchParams.get('sexo') || 'Não informado';

  const filiacao = [mae, pai].filter(Boolean).join(' e ') || 'Não informada';

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          backgroundColor: '#ffffff',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* Faixa Verde Esquerda */}
        <div
          style={{
            width: '72px',
            height: '100%',
            backgroundColor: '#4a6323',
            display: 'flex',
          }}
        />

        {/* Faixa Amarela Esquerda */}
        <div
          style={{
            width: '44px',
            height: '100%',
            backgroundColor: '#f5b800',
            display: 'flex',
          }}
        />

        {/* Área Principal do Documento */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            padding: '28px 44px 28px 56px',
            position: 'relative',
            justifyContent: 'space-between',
          }}
        >
          {/* Marca d'água central/direita */}
          <div
            style={{
              position: 'absolute',
              right: '10px',
              bottom: '20px',
              display: 'flex',
              pointerEvents: 'none',
            }}
          >
            <BrasaoSVG size={430} opacity={0.14} />
          </div>

          {/* Cabeçalho com Brasão e República Federativa */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: '26px',
            }}
          >
            <div style={{ display: 'flex', marginRight: '28px' }}>
              <BrasaoSVG size={105} opacity={1} />
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <span
                style={{
                  fontSize: '19px',
                  fontWeight: 'bold',
                  color: '#111827',
                  letterSpacing: '0.4px',
                }}
              >
                REPUBLICA FEDERATIVA DO BRASIL
              </span>
              <span
                style={{
                  fontSize: '19px',
                  fontWeight: 'bold',
                  color: '#111827',
                  marginTop: '6px',
                }}
              >
                Ministério da Educação - MEC
              </span>
            </div>
          </div>

          {/* Título do Documento */}
          <div
            style={{
              display: 'flex',
              fontSize: '21px',
              color: '#111827',
              marginBottom: '24px',
              letterSpacing: '0.2px',
            }}
          >
            COMPROVAÇÃO FORMAL DE TÉRMINO DO ENSINO DE NÍVEL MÉDIO
          </div>

          {/* Subtítulo */}
          <div
            style={{
              display: 'flex',
              fontSize: '17px',
              color: '#111827',
              marginBottom: '22px',
            }}
          >
            INFORMAÇÕES DO REQUERENTE
          </div>

          {/* Lista de Variáveis Dinâmicas */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              marginBottom: '28px',
              fontSize: '16px',
              color: '#111827',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <strong style={{ marginRight: '8px' }}>CPF:</strong>
              <span>{cpf}</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <strong style={{ marginRight: '8px' }}>Nome:</strong>
              <span>{nome}</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <strong style={{ marginRight: '8px' }}>Nascimento:</strong>
              <span>{nascimento}</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <strong style={{ marginRight: '8px' }}>Sexo:</strong>
              <span>{sexo}</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
              <strong style={{ marginRight: '8px' }}>Filiação:</strong>
              <span>{filiacao}</span>
            </div>
          </div>

          {/* Texto de Atestado */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              fontSize: '16px',
              color: '#1f2937',
              lineHeight: '1.55',
              marginBottom: '24px',
            }}
          >
            <span style={{ marginBottom: '8px' }}>Atestamos que</span>
            <div>
              <strong style={{ color: '#111827' }}>Concluiu o Ensino Médio,</strong>{' '}
              cursado em regime de blocos de disciplinas semestrais em observância ao disposto na Lei nº 9.394/96, em instituição devidamente credenciada pelo MEC – Ministério da educação e em conformidade com as diretrizes do Sistema Estadual de Ensino.
            </div>
          </div>

          {/* Nota de Rodapé */}
          <div
            style={{
              display: 'flex',
              fontSize: '13px',
              color: '#374151',
              lineHeight: '1.4',
            }}
          >
            *Este arquivo não substitui o documento original. Para obtê-lo, solicite o documento oficial via PDF junto a instituição*
          </div>
        </div>
      </div>
    ),
    {
      width: 800,
      height: 710,
    }
  );
}
