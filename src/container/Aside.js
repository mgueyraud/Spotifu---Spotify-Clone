const Aside = () => {
    return (
        <aside className="appContainer__aside aside">
            <img src="./assets/img/icons/logo.svg" alt="Logo" />
            <nav className="aside__item aside__nav js-nav">
                <a href="#" className="-is-active">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M37.0797 39H23.7955V25.5H16.2045V39H2.92032V10.9406L20 1L37.0797 10.8728V39Z" />
                    </svg> Inicio
                </a>
                <a href="#">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M29.4401 27.1181L37.5502 36.6236L34.7596 39L26.6713 29.5164C24.0551 31.2605 21.17 32.1325 18.016 32.1325C15.9085 32.1325 13.8919 31.7219 11.9661 30.9008C10.0404 30.0796 8.38344 28.975 6.99535 27.5869C5.60726 26.1989 4.50266 24.542 3.68154 22.6162C2.86041 20.6904 2.44983 18.6737 2.44977 16.5663C2.44971 14.4588 2.8603 12.4422 3.68154 10.5164C4.50277 8.59054 5.60738 6.93362 6.99535 5.54558C8.38333 4.15755 10.0403 3.05295 11.9661 2.23177C13.892 1.41059 15.9086 1 18.016 1C20.1234 1 22.1401 1.41059 24.0659 2.23177C25.9918 3.05295 27.6487 4.15755 29.0367 5.54558C30.4247 6.93362 31.5293 8.59054 32.3505 10.5164C33.1718 12.4422 33.5823 14.4588 33.5823 16.5663C33.5823 17.9034 33.4152 19.2115 33.0809 20.4905C32.7466 21.7695 32.2706 22.9613 31.6529 24.066C31.0351 25.1706 30.2975 26.188 29.44 27.1181H29.4401ZM18.0161 28.4697C19.6294 28.4697 21.17 28.1536 22.638 27.5213C24.106 26.8891 25.3705 26.0425 26.4314 24.9815C27.4924 23.9205 28.339 22.6561 28.9713 21.1881C29.6036 19.7201 29.9197 18.1795 29.9197 16.5662C29.9197 14.9529 29.6036 13.4123 28.9713 11.9443C28.339 10.4763 27.4924 9.21179 26.4314 8.15076C25.3705 7.08974 24.106 6.24312 22.638 5.61091C21.17 4.9787 19.6294 4.6626 18.0161 4.6626C16.4028 4.6626 14.8622 4.9787 13.3942 5.61091C11.9262 6.24312 10.6617 7.08977 9.6007 8.15085C8.53968 9.21193 7.69306 10.4764 7.06085 11.9443C6.42864 13.4121 6.11254 14.9528 6.11254 16.5662C6.11254 18.1796 6.42864 19.7202 7.06085 21.1881C7.69306 22.6559 8.53971 23.9204 9.60079 24.9815C10.6619 26.0426 11.9263 26.8892 13.3942 27.5213C14.8621 28.1535 16.4027 28.4696 18.0161 28.4697Z" />
                    </svg> Buscar
                </a>
                <a href="#">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.375 8.125V29.5H36.625V8.125H3.375ZM3.375 5.75H36.625C37.2549 5.75 37.859 6.00022 38.3044 6.44562C38.7498 6.89102 39 7.49511 39 8.125V31.875C39 32.5049 38.7498 33.109 38.3044 33.5544C37.859 33.9998 37.2549 34.25 36.625 34.25H3.375C2.74511 34.25 2.14102 33.9998 1.69562 33.5544C1.25022 33.109 1 32.5049 1 31.875V8.125C1 7.49511 1.25022 6.89102 1.69562 6.44562C2.14102 6.00022 2.74511 5.75 3.375 5.75Z" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M24.75 20H34.25V27.125H24.75V20Z" />
                    </svg> Premium
                </a>
            </nav>
            <div className="list-wrapper">
                <div className="aside__item">
                    <h4>Tu biblioteca</h4>
                    <ul className="list">
                        <li>
                            <a href="#">Creada para ti</a>
                        </li>
                        <li>
                            <a href="#">Escuchados recientemente</a>
                        </li>
                        <li>
                            <a href="#">Tus Me Gusta</a>
                        </li>
                        <li>
                            <a href="#">Artistas</a>
                        </li>
                        <li>
                            <a href="#">Podcasts</a>
                        </li>
                    </ul>
                </div>
                <div className="aside__item">
                    <h4>Tu biblioteca</h4>
                    <ul className="list">
                        <li>
                            <a href="#">Creada para ti</a>
                        </li>
                        <li>
                            <a href="#">Escuchados recientemente</a>
                        </li>
                        <li>
                            <a href="#">Tus Me Gusta</a>
                        </li>
                        <li>
                            <a href="#">Artistas</a>
                        </li>
                        <li>
                            <a href="#">Podcasts</a>
                        </li>
                    </ul>
                </div>
                <div className="aside__item">
                    <h4>Tu biblioteca</h4>
                    <ul className="list">
                        <li>
                            <a href="#">Creada para ti</a>
                        </li>
                        <li>
                            <a href="#">Escuchados recientemente</a>
                        </li>
                        <li>
                            <a href="#">Tus Me Gusta</a>
                        </li>
                        <li>
                            <a href="#">Artistas</a>
                        </li>
                        <li>
                            <a href="#">Podcasts</a>
                        </li>
                    </ul>
                </div>
                <div className="aside__item">
                    <h4>Tu biblioteca</h4>
                    <ul className="list">
                        <li>
                            <a href="#">Creada para ti</a>
                        </li>
                        <li>
                            <a href="#">Escuchados recientemente</a>
                        </li>
                        <li>
                            <a href="#">Tus Me Gusta</a>
                        </li>
                        <li>
                            <a href="#">Artistas</a>
                        </li>
                        <li>
                            <a href="#">Podcasts</a>
                        </li>
                    </ul>
                </div>
            </div>
            <img src="./assets/img/placeholders/placeholder--now-playing.png" className="aside__playing js-image-cover" alt="Bad Bunny - Dakiti" />
        </aside>
    );
}

export default Aside;