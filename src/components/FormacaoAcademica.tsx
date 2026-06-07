import { formacaoData } from '../data/formacao';

export default function FormacaoAcademica() {
  return (
    <section className="mt-[50px] bg-portfolio-bg px-5 py-[50px] text-center text-portfolio-muted transition-colors duration-300 light:bg-portfolio-surface light:text-portfolio-bg">
      <div className="ml-20 flex max-[1050px]:ml-5">
        <p className="flex items-center text-left text-[34px] font-bold">
          <span className="portfolio-linha" /> Formação Acadêmica{' '}
        </p>
      </div>

      <div className="ml-[35px] max-[600px]:ml-5 max-[460px]:ml-5">
        {formacaoData.map((item, index) => {
          const isLast = index === formacaoData.length - 1;

          return (
            <div
              key={`${item.curso}-${item.periodo}`}
              className="relative mb-5 max-w-[1250px] pt-[15px] pb-10 pl-[100px] text-left text-lg max-[1050px]:pl-[35px] max-[1050px]:pb-5"
            >
              <div
                className={`absolute top-0 left-0 mt-[31px] flex flex-col max-[1050px]:mt-[45px] max-[1050px]:ml-[7px] max-[815px]:mt-[70px] max-[815px]:ml-[18px] max-[600px]:mt-20 max-[600px]:ml-[15px] max-[460px]:ml-2.5 ${
                  isLast
                    ? 'ml-20 max-[460px]:mt-[120px]'
                    : 'ml-20 max-[460px]:mt-[126px]'
                }`}
              >
                <div className="h-[100px] w-2.5 bg-portfolio-accent" />
                <div className="mt-[7px] ml-[17px] h-2.5 w-[858px] bg-portfolio-accent max-[1050px]:w-[700px] max-[815px]:w-[500px] max-[600px]:w-[400px] max-[460px]:w-[300px]" />
              </div>

              <div>
                <h3 className="pt-[15px] text-left text-xl text-portfolio-muted light:text-portfolio-bg">
                  {item.curso} - {item.instituicao}
                </h3>
                <p className="text-portfolio-yellow light:text-portfolio-accent">
                  {item.periodo}
                </p>
                <p className="pt-[15px]">{item.conhecimentos}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
