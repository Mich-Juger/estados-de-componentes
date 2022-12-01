function Input({nombre, setNombre, password, setPassword}) {
    return(
        <div>
            <label htmlFor="nombre" > Nombre:</label>
            <input 
                type="text" 
                name="nombre"
                id="nombre"
                placeholder="Ingresa tu nombre"
                onChange={(event) => setNombre(event.target.value)}
                value={nombre}
            
            />


            <label htmlFor="password" > Password:</label>
            <input 
                type="password"
                name="password"
                id="password" 
                placeholder="Password"
                onChange={(event) => setPassword(event.target.value)}
                value={password}
            />
        </div>

    ); 
}

export default Input; 