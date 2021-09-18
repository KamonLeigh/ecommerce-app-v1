import Head from 'next/head'
import Image from 'next/image'
import Header from '@components/Header'
import Container from '@components/Container'
import Button from '@components/Button/Button'
import styles from '@styles/Home.module.scss'


import products from '@data/product.json'



export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <Header/>
      <main>
        <Container>
          <h1>Hyper Bros. Trading Cards</h1>
          <h2>Available Cards</h2>
          <ul className={styles.products}>
            {products.map(product => (
              <li key={product.id}>
                <Image width="864" height="1200" src={product.image} alt={`cart of ${product.title}`}/>
                <h3 className={styles.productTitle}>{product.title}</h3>
                <p className={styles.productPrice}>
                  £{product.price}
                </p>
                <p>
                  <Button>Add to Cart</Button>
                </p>
            </li>

            ))}
            
            <li>
                <img src="/images/bowser-holo.jpg" alt="Bowser Holographic"/>
                <h3>Bowser Holographic</h3>
                <p>
                  £99.99
                </p>
                <p>
                  <button>Add to Cart</button>
                </p>
            </li>
            <li>
                <img src="/images/bowser-holo.jpg" alt="Bowser Holographic"/>
                <h3>Bowser Holographic</h3>
                <p>
                  £99.99
                </p>
                <p>
                  <button>Add to Cart</button>
                </p>
            </li>
            <li>
                <img src="/images/bowser-holo.jpg" alt="Bowser Holographic"/>
                <h3>Bowser Holographic</h3>
                <p>
                  £99.99
                </p>
                <p>
                  <button>Add to Cart</button>
                </p>
            </li>
          </ul>
        </Container>
      </main>

      <footer className={styles.footer}>
       @copy Hyper Bros. Trading Cards { new Date().getFullYear()}
      </footer>
    </div>
  )
}
