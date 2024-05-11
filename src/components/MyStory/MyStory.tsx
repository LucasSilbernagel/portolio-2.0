import { Link, navigate } from 'gatsby'
import scrollTo from 'gatsby-plugin-smoothscroll'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import './MyStory.css'
import { StaticImage } from 'gatsby-plugin-image'

const MyStory = () => {
  const handleClick = (selector: string) => {
    navigate('/')
    setTimeout(() => {
      scrollTo(selector)
    }, 500)
  }

  return (
    <div className="MyStory mb-36">
      <h1>My story</h1>
      <section className="mt-24">
        <p>
          Like many people, my road to becoming a software developer was a long
          and winding one. While it seems as though certain rare souls easily
          stumble upon a skillset and career path that defines and motivates
          them, I’ve always felt more like a jack of all trades, master of none.
          From high school onward, my interests and strengths included
          languages, writing, martial arts, music, history, film, and more. I
          remember enjoying a basic web design course in high school, but with
          my focus constantly shifting between a myriad of other interests, it
          was difficult to imagine pursuing a career in that field, at least
          back then.
        </p>
        <p>
          In 2009 I headed off to the University of British Columbia (Okanagan
          campus), set on becoming a high school teacher of history and French.
          Not only did I admire many of my former teachers, but I had previously
          enjoyed tutoring a high school French class and teaching karate in my
          small hometown. At UBC, however, I was almost immediately enamoured by
          the field of anthropology after taking an introductory class in my
          first year. Often described as “the study of all people, at all times,
          and in all places”, anthropology cast a wide net over many of my
          interests: history, languages, politics, writing, travel, and my
          propensity to be an information sponge.
        </p>
        <p>
          I moved to Toronto in 2014 to pursue a Master of Arts degree in
          sociocultural anthropology at U of T. I planned to later pursue a PhD
          and become a professor of anthropology, but even as I boarded the
          plane to Toronto I had serious doubts about that career path.
          Full-time, tenured positions in academia were becoming a thing of the
          past, and I would likely have to work for years as an underpaid
          sessional instructor for a shot at the big time, with the knell of
          “publish or perish” hanging over my head. I loved expanding my brain
          with social theory, and I loved connecting that theory with the lived
          experiences of the people I met as I conducted fieldwork for{' '}
          <a
            className="MyStory__link"
            href="https://www.amazon.com/dp/B09FSPJSPL/ref=tsm_1_fb_lk"
            target="_blank"
            rel="noreferrer"
          >
            my own research project
          </a>
          . But by the end of the program, I knew I had to do something
          different.
        </p>
        <p>
          I worked briefly in a sales role for a tech company in Toronto, and
          then for over three years in a call centre that acts as a third party
          for companies that outsource their payroll and HR departments. In
          addition to being a valued (bilingual) member of the customer service
          team, I found that I had a knack for solving technical problems with
          the associated websites and software. I enjoyed training and coaching
          colleagues as a team lead, but further advancement eluded me. With my
          background in anthropology, the field of user research seemed like a
          good career fit, but my applications to open roles were rejected due
          to a lack of experience in the tech industry.
        </p>
        <p>
          After much research and deliberation, I enrolled in a part-time
          introductory web development course at a coding bootcamp in Toronto.
          Coding seemed like a good parallel for my love of languages, learning,
          and solving technical problems. It also satisfied the creative side of
          my brain, allowing me to build and share useful things with other
          people.
        </p>
        <p>
          In January of 2020, I quit my job at the call centre to complete a
          full-time accelerated JavaScript course, followed immediately by a
          9-week bootcamp where I leveled-up my skills, built a portfolio of web
          development projects, and made connections that I maintain to this
          day. In spite of the challenges posed by the start of the COVID-19
          pandemic and lockdown, I managed to secure my first position as a
          front-end developer a couple months after graduating.
        </p>
        <p>
          Since 2020, I’ve continued to learn and grow as a developer by taking
          additional courses, following industry newsletters, and building{' '}
          <button onClick={() => handleClick('#projects-section')}>
            side projects
          </button>
          . I’ve had the privilege of being mentored by brilliant developers in
          each of my professional roles, and I’ve paid it forward by mentoring
          more junior developers both on the job and in a volunteer capacity.
          You can learn more about my professional experience{' '}
          <button onClick={() => handleClick('#experience-section')}>
            here
          </button>
          .
        </p>
        <p>
          When I’m not coding, I’m most often either working out, reading a good
          book, practicing guitar, gaming, or watching a compelling TV show or
          movie. I also love to travel, and I make it a point to always be
          saving and planning for my next big trip.
        </p>
        <div className="max-w-[380px] min-h-[400px] lg:min-h-[560px] mx-auto">
          <Carousel autoPlay infiniteLoop interval={7000} showStatus={false}>
            <div className="PhotoContainer">
              <StaticImage
                alt="Lucas Silbernagel standing in front of Angkor Wat at sunrise"
                src="../../images/angkor.jpg"
              />
            </div>
            <div className="PhotoContainer">
              <StaticImage
                alt="Lucas Silbernagel standing on a riverboat at sunset in Phnom Penh, Cambodia"
                src="../../images/cambodia.jpg"
              />
            </div>
            <div className="PhotoContainer">
              <StaticImage
                alt="Lucas Silbernagel sitting on a rooftop patio in Toronto"
                src="../../images/north-york.jpg"
              />
            </div>
            <div className="PhotoContainer">
              <StaticImage
                alt="Lucas Silbernagel sitting on a couch playing an acoustic guitar"
                src="../../images/guitar.jpg"
              />
            </div>
          </Carousel>
        </div>
        <p className="md:text-center">
          I’m always happy to make more connections, so feel free to reach out!
        </p>
        <div className="w-full flex justify-center">
          <Link to="/contact" className="AccentButton relative z-10">
            Say hello
          </Link>
        </div>
      </section>
    </div>
  )
}

export default MyStory
