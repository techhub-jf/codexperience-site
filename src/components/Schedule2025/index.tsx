import React from "react";

interface ScheduleItem {
  time: string;
  room1?: { theme: string; speaker: string };
  room2?: { theme?: string; speaker?: string };
  room3?: { theme?: string; speaker?: string };
}

const schedule: ScheduleItem[] = [
  { time: "8:00", room1: { theme: "CREDENCIAMENTO", speaker: "" } },
  { time: "9:00", room1: { theme: "ABERTURA", speaker: "" } },
  { time: "9:10", room1: { theme: "ORQUESTRAÇÃO INTELIGENTE COM CELERY: DOMINANDO FILAS EM PYTHON", speaker: "Aldemon Bonifácio" } },
  { time: "9:40", room1: { theme: "POR TRÁS DA CORTINA: MONITORANDO EXECUÇÕES NO FABRIC COM CÓDIGO", speaker: "Danilo Santos" } },
  { time: "10:30", room1: { theme: "COFFEE BREAK", speaker: "" } },
  { time: "11:00", room1: { theme: "POR QUE A IA QUE PARECIA PERFEITA ERRA NO MUNDO REAL — E COMO MEDIR E MANTER MODELOS DE MACHINE LEARNING EM PRODUÇÃO", speaker: "Lucas Lopes" } },
  { time: "11:30", room1: { theme: "REDUZINDO DÉBITO TÉCNICO ANTES QUE ELE QUEBRE SEU PROJETO", speaker: "Wendel Moreira" } },
  { time: "12:00", room1: { theme: "ESCREVENDO SOFTWARE DE FORMA EFICIENTE COM IA", speaker: "Romulo Assis" } },
  { time: "13:00", room1: { theme: "ALMOÇO", speaker: "" } },
  { time: "14:15", room1: { theme: "IGNITE TALKS", speaker: "" } },
  { time: "14:30", room1: { theme: "DEVOPS PARA DEVS: DESVENDADO A MÁGICA", speaker: "Tiago Calado" } },
  { time: "15:00", room1: { theme: "\"TRABALHANDO PARA A GRINGA\" - PROCESSOS SELETIVOS, ERROS E ACERTOS EM 2 ANOS DE EXPERIÊNCIA.", speaker: "Henrique Barbosa" } },
  { time: "15:30", room1: { theme: "COFFEE BREAK", speaker: "" } },
  { time: "16:00", room1: { theme: "OPEN SPACE", speaker: "" } },
  { time: "17:00", room1: { theme: "ENTENDENDO DE VERDADE: IA E CÉREBRO HUMANO", speaker: "Igor Nascimento" } },
  { time: "17:30", room1: { theme: "ENCERRAMENTO", speaker: "" } },
];

const ScheduleTable: React.FC = () => {
  return (
    <div id="4" className="bg-black px-4 py-2 text-white">
      <div className="max-w-7xl m-auto mb-32">
        <h2 className="text-3xl font-bold text-center mb-8">Programação</h2>

        {schedule.map((item, index) => (
          <div
            key={index}
            className={`p-4 border border-green-500 rounded-lg space-y-2 ${
              item.time === '13:00'
                ? 'bg-gray-600'
                : item.time === '10:30' || item.time === '15:30'
                ? 'bg-gray-700'
                : 'bg-gray-800'
            } mb-4`}
          >
            <p className="text-lg font-semibold">{item.time}</p>
            <div>
              <p
                className={`${
                  (item.room1?.theme === 'ALMOÇO' || item.room1?.theme === 'COFFEE BREAK') && 'font-bold'
                }`}
              >
                {item.room1?.theme}
              </p>
              {item.room1?.speaker && (
                <p className="text-gray-400">{item.room1.speaker}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScheduleTable;

