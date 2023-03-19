import Title from "./title"
import { tours } from "../data"
const Toors = () =>{
    return <>
      <section className="section" id="tours">
      <Title title="featured" span="tours" />

      <div className="section-center featured-center">
        
        {
          tours.map((tour)=>{
              return <article className="tour-card">
                  <div className="tour-img-container" >
                    <img src={tour.img} className="tour-img"/>
                    <p className="tour-date" >{tour.date}</p>
                  </div>
                  <div className="tour-info">
                  
                  <div className="tour-title">
                    <h4>{tour.title}</h4>
                  </div>
                  <p>
                    {tour.p}
                  </p>
                  <div className="tour-footer">
                    <p>
                      <span><i className="fas fa-map"></i></span> {tour.location}
                    </p>
                    <p>{tour.duration}</p>
                    <p>{tour.price}</p>
                  </div>
                </div>
              </article>
                 
              
          })
        }
      </div>
    </section>
    </>
}

  export default Toors