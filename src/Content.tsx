import { useEffect, useRef } from "react";
import { scrollBarTheme, useScrollBar } from "./useScrollBar";

export default function Content({
  light = false,
  theme,
  link,
}: {
  light?: boolean;
  link?: string;
  theme: scrollBarTheme;
}) {
  const ref = useRef<HTMLElement>(null);
  const [initialize, scrollBarInstance] = useScrollBar({ theme });
  useEffect(() => {
    if (ref?.current) {
      initialize(ref.current);
    }
    return () => scrollBarInstance()?.destroy();
  }, [initialize, scrollBarInstance]);
  return (
    <div className={`scroll-container ${light ? "light-theme" : ""}`}>
      <div className="theme-name">{theme}</div>
      <article ref={ref}>
        <div className="inner-div">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto minus
          et laudantium, explicabo dignissimos incidunt aperiam magni quae
          veritatis corporis qui nihil perferendis nesciunt iste deserunt ea.
          Inventore, exercitationem officia. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Aperiam corrupti odio voluptate
          provident repudiandae! Suscipit, et? Nostrum, nam dolorem dicta non
          ullam molestias perferendis ex reiciendis consequatur ratione nesciunt
          cumque.
          <br />
          <br />
          Quasi natus repellendus iusto blanditiis! Labore consequatur eum
          consectetur accusantium, animi voluptates cum earum ut nulla ad!
          Voluptate eum rerum est magnam adipisci, sunt ea dolor laboriosam
          aperiam nulla ullam. Sequi quod modi sit ducimus dicta tempora, quis
          facilis error nesciunt magnam? Eaque nulla totam labore porro
          doloremque minus repellat aliquid harum tenetur ullam consequatur
          autem, suscipit quia debitis id? Aliquid molestiae autem dolor quia?
          Iusto, eum! Quasi quod eligendi cupiditate similique, a asperiores eum
          earum repellat dolor ratione dolore illo dolorem odit minima sapiente
          praesentium. Ullam earum expedita ipsa. Repellat inventore fugiat
          tempore non sed voluptate ducimus sint laborum molestiae praesentium?
          Recusandae veniam quidem amet, assumenda fuga laudantium ad suscipit
          impedit sequi adipisci, laborum consequuntur tempore aliquid facilis
          quo.
          <br />
          <br />
          Autem quidem sed inventore beatae soluta ipsa veniam totam,
          consectetur error rerum laborum necessitatibus officia id magnam ullam
          recusandae repudiandae ad rem sunt quam qui! Quasi optio eveniet ipsum
          nihil. Ea, nesciunt eius. Nisi iusto earum quidem hic, possimus
          consectetur nostrum ut minus suscipit! Nostrum, iste! Libero, a
          placeat ea dolorum, velit eius fugiat impedit vitae iusto sequi facere
          numquam. Illum veritatis dolor possimus consectetur doloribus
          voluptatibus temporibus odit! Porro dolorum, quasi minima asperiores
          sapiente iure in pariatur? Porro exercitationem repellat aut saepe
          illo quidem inventore voluptates. Quaerat, eligendi molestias.
          Eligendi, reiciendis pariatur. Quae nulla quaerat quos dicta ipsum
          totam, numquam quo. Enim tenetur nesciunt vero mollitia, hic placeat
          corporis, blanditiis magnam impedit accusantium asperiores error
          libero sequi a modi. Earum doloremque, cumque architecto molestias qui
          dolore deserunt molestiae eum, dolorum fugiat dolor quisquam, nisi
          eaque! Reiciendis, nemo? Et alias tempora consequatur, blanditiis
          iusto minima exercitationem facere quidem id velit! Temporibus
          veritatis perferendis rerum laudantium minus perspiciatis, explicabo,
          molestiae doloremque obcaecati velit maiores amet harum voluptas ex
          quam. Recusandae repellendus obcaecati eos fugit debitis eum nemo unde
          distinctio.
          <br />
          <br />
          Molestias, ipsum! Ab obcaecati illo ipsam quod architecto incidunt
          maiores fugiat, sequi accusantium aliquam at recusandae quo neque eos
          iste reiciendis porro facere? Maiores accusamus autem, consequatur hic
          saepe vero aliquam a! Asperiores quo cumque iste possimus molestiae
          consectetur magni sint tempora provident obcaecati voluptatum quis
          voluptate harum nesciunt officia quos rerum, distinctio odio iusto
          explicabo animi! Perspiciatis fugit animi ullam dolore? Quaerat
          accusantium vitae nihil asperiores expedita nostrum ab consequatur,
          ipsum non modi libero totam impedit eveniet sapiente, omnis vel culpa
          dolor delectus unde doloribus exercitationem deserunt ex. <br />
          <br />
        </div>
      </article>
      <div className="download-link">
        {["os-theme-dark", "os-theme-light"].includes(theme) ? (
          "built-in"
        ) : (
          <a href={link} target="_blank">
            Download
          </a>
        )}
      </div>
    </div>
  );
}
