
import React from 'react'

const Home = () => {
    return (

        <>
            <div id="bg-img">
                <div>
                    <h3 className="text-center">Start your search</h3>

                    <div className="card" style={{background:'gray'}}>
                        <div className="card-body">
                            <div>
                            <input type="text" name="" id="" placeholder="what are you looking for?" />
                            <input type="text" name="" id="" placeholder="arrival date" />
                            <input type="text" name="" id="" placeholder="departure date" />
                            <input type="text" name="" id="" placeholder="number of guests" />
                            <a href="#" className="btn btn-primary">Search</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-5">
                        <img src="https://a0.muscache.com/im/pictures/701d7170-3365-4b75-a255-39feebed95de.jpg" alt="" width="100%" />
    
                    </div>
                    <div className="col-md-7">
                        <h3>Try hosting</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis voluptates quaerat quas impedit! Necessitatibus delectus rerum enim. Nobis, cupiditate nisi temporibus soluta iste autem quisquam alias? Incidunt, totam numquam? Dolorum.</p>
                        <hr />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ea rem eaque doloremque quaerat similique. Est deleniti amet, aliquam quasi iure in eum modi tenetur qui aspernatur doloribus expedita fugit.</p>
                        <button className="btn btn-primary">post your requirements here</button>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-4">
                        <div class="card" style={{width:'18em'}}>
                            <img src="https://a0.muscache.com/im/pictures/32776fd5-bf65-4dcf-aaba-36c6ee6518eb.jpg" class="card-img-top" alt="..."/>
                            <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                    <div class="card" style={{width:'18em'}}>
                            <img src="https://a0.muscache.com/im/pictures/32776fd5-bf65-4dcf-aaba-36c6ee6518eb.jpg" class="card-img-top" alt="..."/>
                            
                            <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                    <div class="card" style={{width:'18em'}}>
                            <img src="https://a0.muscache.com/im/pictures/32776fd5-bf65-4dcf-aaba-36c6ee6518eb.jpg" class="card-img-top" alt="..."/>
                            <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-12">
                        <div className="d-flex">
                            <h3>Signup for our newsletter</h3>
                            <input type="text" name="" id="" />
                            <button className="btn btn-primary">Subscribe</button>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <h5 className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati mollitia nemo nesciunt laudantium</h5>
                    <div className="col-md-3">
                        <h3>About</h3>
                        <ul style={{listStyle:'none'}}>
                            <li>item1</li>
                            <li>item2</li>
                            <li>item3</li>
                            <li>item4</li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                    <h3>Community</h3>
                        <ul style={{listStyle:'none'}}>
                            <li>item1</li>
                            <li>item2</li>
                            <li>item3</li>
                            <li>item4</li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                    <h3>Host</h3>
                        <ul style={{listStyle:'none'}}>
                            <li>item1</li>
                            <li>item2</li>
                            <li>item3</li>
                            <li>item4</li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                    <h3>Support</h3>
                        <ul style={{listStyle:'none'}}>
                            <li>item1</li>
                            <li>item2</li>
                            <li>item3</li>
                            <li>item4</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>

        

    )
}

export default Home
