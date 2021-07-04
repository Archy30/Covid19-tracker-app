import React,{useEffect , useState} from 'react';

export default function Covid() {

    const [data, setData] = useState([]);

    const getCovidData = async () => {
      try{
        const res = await fetch('https://api.covid19india.org/data.json');
        const actualData = await res.json();
        console.log(actualData.statewise[0]);
        setData(actualData.statewise[0]);
      }
      catch(err){
        console.log(err);
      }
          
    }
    useEffect(() => {
          getCovidData();
      }, [])


    return (
        <>
        <section id="container">        
          
          <h1 className="heading">COVID-19 TRACKER APP</h1>  
            <div className="outer">
      
                <div className="card__inner" >
                  <p className="card__name">COUNTRY</p>
                  <p className="value">INDIA</p>
                </div>
            
                <div className="card__inner">
                  <p className="card__name">TOTAL RECOVERED</p>
                  <p className="value">{data.recovered}</p>
                </div>
            
                <div className="card__inner">
                  <p className="card__name">TOTAL CONFIRMED</p>
                  <p className="value">{data.confirmed}</p>
                </div>
            
                <div className="card__inner">
                  <p className="card__name">TOTAL DEATH</p>
                  <p className="value">{data.deaths}</p>
                </div>
            
                <div className="card__inner">
                  <p className="card__name">TOTAL ACTIVE</p>
                  <p className="value">{data.active}</p>
                </div>
            
                <div className="card__inner">
                  <p className="card__name">LAST UPDATED</p>
                  <p className="value">{data.lastupdatedtime}</p>
                </div>
                 
            </div>
          </section>
        </>
    )
}
