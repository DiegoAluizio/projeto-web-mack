import './globals.css' //Chama esse cara para passar o estilos pro site todo

//Children é pg que estiver na mesma estrutura do layout.js
export default function RootLayout ({children}){
    return (
        <html lang="pt-BR">
            <body>{children} </body>
        </html>
    )
}