import "./Titulo.css" 

export const Titulo = ({titulo, subtitulo})=>{
    return(
      <div className="greeting">
          <h1 className='h1'>{titulo}</h1>
          <h2 className='h2'>{subtitulo}</h2>
      </div>
    )
  }
