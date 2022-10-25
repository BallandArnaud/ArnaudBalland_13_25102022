import Hero from '../../components/Hero'
import Feature from '../../components/Feature'
import chatIcon from '../../assets/icons/icon-chat.png'
import moneyIcon from '../../assets/icons/icon-money.png'
import securityIcon from '../../assets/icons/icon-security.png'
import './index.css'

function Home() {
  return (
    <main className="home">
      <Hero />
      <section className="features">
        <h2 className="sr-only">Features</h2>
        <Feature
          image={chatIcon}
          alt="Chat Icon"
          title="You are our #1 priority"
          text="Need to talk to a representative? You can get in touch through our
          24/7 chat or through a phone call in less than 5 minutes."
        />
        <Feature
          image={moneyIcon}
          alt="Chat Icon"
          title="More savings means higher rates"
          text="The more you save with us, the higher your interest rate will be!"
        />
        <Feature
          image={securityIcon}
          alt="Chat Icon"
          title="Security you can trust"
          text="We use top of the line encryption to make sure your data and money is
          always safe."
        />
      </section>
    </main>
  )
}

export default Home
