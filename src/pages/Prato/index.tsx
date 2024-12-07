import styles from './Prato.module.scss';
import { useParams, useNavigate } from 'react-router-dom';
import cardapio from 'data/cardapio.json';
import TagsPrato from 'components/TagsPrato';
import PaginaPadrao from 'components/PaginaPadrao';
import NotFound from 'pages/NotFound';

export default function Prato() {
  const { id } = useParams();
  const navigate = useNavigate();
  const prato = cardapio.find(item => item.id === Number(id));
  if(!prato) {
    return <NotFound/>;
  }
  return (
    <PaginaPadrao>
      <button className={styles.voltar} onClick={() => navigate(-1)}>
        {'< Voltar'}
      </button>
      <div className={styles.container}>
        <h1 className={styles.titulo}>
          {prato.title}
        </h1>
        <div className={styles.imagem}>
          <img src={prato.photo} alt={prato.title} />
        </div>
        <div className={styles.conteudo}>
          <p className={styles.conteudo__descricao}>
            {prato.description}
          </p>
        </div>
        <TagsPrato {...prato} />
      </div>
    </PaginaPadrao>
  );
}