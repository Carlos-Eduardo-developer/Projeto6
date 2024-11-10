import { useState } from "react"

function GaleriaDeImagens() {
  const [imagens, setImagens] = useState([
    'https://designcomcafe.com.br/wp-content/uploads/2023/10/como-criar-prompts-para-geracao-de-imagens-com-ia.jpg',
    'https://services.meteored.com/img/article/inteligencia-artificial-aprende-a-reconstruir-imagens-vistas-por-pessoas-ciencia-fotos-1679175318563_1024.jpg',
    'https://s2-techtudo.glbimg.com/b5YztaIHpXYbpVYJsK0ySxOKW_w=/0x0:1344x768/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2024/A/h/ZskOJZQ9amSC55FcJROA/dream-studio-ai.png'
  ])

  const adicionarImagem = () => {
    setImagens([...imagens, 'https://via.placeholder.com/150'])
  }

  return (
    <div>
      <h2>Galeria de Imagens</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {imagens.map((imagem, index) => (
          <img key={index} src={imagem} alt={`Imagem ${index + 1}`} style={{ width: '150px', height: '150px', objectFit: 'cover', margin: '5px' }} />
        ))}
      </div>
      <button onClick={adicionarImagem} style={{ marginTop: '10px' }}>Adicionar Imagem</button>
    </div>
  )
}

export default GaleriaDeImagens