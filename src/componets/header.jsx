function Header({toma1valor}) {
    //enviando valor de manera indirecto al padre
    toma1valor('hola');
    return(
        <>
        <h1 className="font-black text-5xl  mt-5 text-center mx-auto md:w-2/3">
            Seguimiento Paciente {""}
            <span className="text-indigo-600">Veterinaria</span>
        </h1>   
        </>   
    )
}
export default Header;