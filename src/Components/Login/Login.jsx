import { FaUser, FaLock} from 'react-icons/fa'
import { useState } from 'react'
import "./Login.css"


const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault() // para a página não recarregar

        alert("enviando os dados: " + "E-mail: " + username + " Senha: " + password) // capta os dados para enviar para o servidor
    }
  return (
    <div className="container">
        <form onSubmit={handleSubmit}>
            <h1>Acesse o sistema</h1>
            <div className="input-field">
           <input type="email" placeholder="E-mail" onChange={(e) => setUsername(e.target.value)} />  {/* Vai pegar o valor que o usuáario digitar e extrair. e: evento de digitar, target: elemento alvo, value: oque está sendo digitado */}
           <FaUser className="icon"></FaUser>   {/* Icones */}
            </div >
            <div className="input-field">
            <input type="password" placeholder="Senha" onChange={(e) => setPassword(e.target.value)}/>
            <FaLock className="icon"></FaLock>
            </div>

            <div className="recall-forget">
                <label>
                    <input type="checkbox"/>
                    Lembre de mim
                </label>
                <a href="#">Esqueceu a senha</a>
            </div>
            <button>Entrar</button>

            <div className="signup-link">
                <p>Não tem uma conta? <a href="#">Registrar</a></p>
            </div>
        </form>
    </div>
  )
}

export default Login
