import BorrarUsuario from "@/components/borrar";
import axios from "axios";
async function getUsuarios(){
    const url="http://localhost:3000/User";
   const usuarios = await axios.get(url);
   //console.log(universidades.data);
   return usuarios.data;
}


export default async function Usuarios(){
    const usuarios=await getUsuarios();
    return(
        <>
        <h1>Usuarios</h1>
        <table className="table">
            <thead>
                <tr>
                <th>id</th>
                <th>nombre</th>
                <th>nombre de usuario</th>
                <th>Editar/Borrar</th>                    
                </tr>
            </thead>
            <tbody>
                {
                    usuarios.map((usuario,i)=>(
                        <tr key={i}>
                            <td>{i+1}</td>
                            <td>{usuario.nombre}</td>
                            <td>{usuario.usuario}</td>
                            <td>
                               <BorrarUsuario id={usuario.id}/>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
        </>
    );
}