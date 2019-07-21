import React from 'react';
export default function Footer() {
    return (
        <div>
            <div className="container-fluid text-center" style={{ background: '#f3f3f3', padding: '5%', marginTop:'12%'}}>
                <div className="row">
                    <div className="col-xl-6 col-12">
                        <b>&copy;2019&nbsp;Nattraphak.com</b>
                    </div>
                    <div className="col-xl-6 col-12">
                        #NattraphakPhatai &nbsp;
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEU6VZ////81Up0yT5xgc61+jbsvTZyXo8hFXaOirM0nSJmlrs7O1OUkRpkfQ5c1UZ1oerKHlcDp6/M9WKHHzeHV2ulxgravt9Td4Ozl6PGDkb7ByN5YbatQZ6j29/q3v9h2hrhMY6aQnMSsAnKHAAAC70lEQVR4nO3caXLiMBRFYdoihhhsQ5jDlPT+F9mdqv7bRrYQ7z7XOQug9BUWHiQzmRARERERERERERERERERqVe0IZQPCtaDHFwo62Yz/VrP3jtbrH0Sy7rYH46/YtpV1oPtX6jCbBel+2npThjq/Taa51AYmrdTH583YdHsP/r5nAnLTa/j05+w+ezv8yRsq/MQoB9hmPeegb6E5eU2DOhFWK4G+rwIw3CgD2G4Dge6ELaboXPQi7CJu4nwK6zvKUAHwvCVBHQgrFMmoQdh4jGqL2wviUB5YRP/uMKnsJ2mAtWF9XLkwjblcs2FsDqMXZh6LpQXhn06UFtYpZ7t5YX1wEczboTF/AlAaWFYP0OovPZU9pmGt9194W79sIq/Jt2uqqrytwbcxJ4NT9e6tR7soEIk8N749E2K7zjgubEe6dAi75yOboGxwrnTQ/RvRZTwIHy6e1SccF5Yj3N4UcJjbT3MhKKEh9J6mAlFCZWvyR4WJXxDqBxChPohRKgfQoT6IUSoH0KE+iFEqB9ChPqNQ1h0vKJcxWwt/aofvelsDFzNOlpECO9dH/DT+8ZUWMYgErNdfXuB8Ga7RPwCofHy2wuE59EfpQvbH9MXCNejF65st2q8QPhtu5Mhv/BmfE2TX/hhvGMqv3BpvBslv/BuvGUqv3A2+nloff+YX3gx3rmYX2j9CCC78Ga9NzO78GS9dTG7cDv679B8c2Z24e/R/9LsRy+8Wm/kzy60nobZhdb3TvmF9u8e5hYaP0p8gfB99PPQ/l2F3MKp+StDuYXWvuxC60eJ+YXm907ZhQJ/NlA+4d9ZOrrbH6WTzbyjmL+D/Oz6BNsl/H8V/y9E7TYpOz7BGveoceyn6QohQv0QItQPIUL9ECLUDyFC/RAi1A8hQv0QItQPIUL9ECLUDyFC/RAi1A8hQv0QItQPIUL9ECLUDyFC/RAi1A8hQv0QItQPIUL9ECLUDyFC/RAi1A8hQv0QItQPIUL9ECLs0R8aFUYEFLSeAgAAAABJRU5ErkJggg=="
                            alt="social"
                            width="25" />
                        &nbsp;
                            <img src="http://porjaiauto.com/frontend/assets/images/ig.png"
                            alt="social"
                            width="25" />
                        &nbsp;
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/LINE_logo.svg/1024px-LINE_logo.svg.png"
                            alt="social"
                            width="25" />
                        &nbsp;
                            <img src="data:image/png;base64,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"
                            alt="social"
                            width="25" />
                    </div>
                </div>
            </div>
        </div>
    )
}
