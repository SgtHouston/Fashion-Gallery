import Footer from "../components/Footer";
import Header from "../components/Header";
import '../componentcss/Clients.css'
import picDB from "../db/db";
import parse from 'html-react-parser';

function Clients() {

    function renderPic (pic, index) {
        // write render pic function
        // accepts a pictures and renders it in an img tag
        return (
            `<img className ='client-pic' src=${pic} alt='' key=${index}></img>`
        )
        
    }   

    return (
        <div className="clients">
            <Header />
            <div className="clients-body">
                <h2 className="clients-title">Client Gallery</h2>
                
                { picDB.map((pic, index) => {
                    return (
                        parse(renderPic(pic, index))
                    )
                })}

            </div>
            <Footer />

        </div>
    )
}

export default Clients;
