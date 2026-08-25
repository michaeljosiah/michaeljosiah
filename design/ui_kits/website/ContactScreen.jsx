const NS=()=>window.MichaelJosiahDesignSystem_bafdc6;
function ContactScreen({onNavigate}){
  const {PageHero,Eyebrow,TextField,Button,Icon,ContactMethod,ValueCard,QuoteBlock,Panel}=NS();
  const [sent,setSent]=React.useState(false);
  return <div>
    <PageHero minHeight={270} eyebrow="Let's connect" lines={['Ideas are','stronger','together.']} level={2}
      image="../../assets/hero-portrait.png"
      blurb={<>Whether you have a question, a project<br/>in mind, or just want to say hello,<br/>I'd love to hear from you.</>}/>
    <div style={{padding:'var(--sp-6) var(--pad-shell) var(--sp-9)',display:'flex',flexDirection:'column',gap:'var(--gutter-grid)'}}>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'var(--gutter-grid)',alignItems:'start'}}>
        <Panel style={{display:'flex',flexDirection:'column',gap:'var(--sp-3)',padding:'var(--pad-panel)'}}>
          <Eyebrow style={{marginBottom:'var(--sp-1)'}}>Send a message</Eyebrow>
          <TextField placeholder="Your Name" icon="user"/>
          <TextField placeholder="Your Email" icon="mail"/>
          <TextField placeholder="Subject" icon="tag"/>
          <TextField placeholder="Your Message" icon="pencil" multiline rows={4}/>
          <Button style={{width:'100%',marginTop:'var(--sp-1)'}} onClick={()=>setSent(true)}>{sent?'Message sent':'Send message'}</Button>
          <div style={{display:'flex',gap:'var(--sp-2)',alignItems:'flex-start',color:'var(--text-faint)',font:'var(--fw-regular) var(--fs-micro)/1.5 var(--font-body)'}}>
            <Icon name="lock" size={12} style={{marginTop:2,color:'var(--gold-500)'}}/>
            <span>I respect your privacy. Your information<br/>will never be shared.</span>
          </div>
        </Panel>
        <Panel style={{padding:'var(--pad-panel)'}}>
          <Eyebrow style={{marginBottom:'var(--sp-5)'}}>Ways to connect</Eyebrow>
          <div style={{display:'flex',flexDirection:'column',gap:'var(--sp-6)'}}>
            <ContactMethod icon="mail" label="Email" value="hello@michael.josiah.com"/>
            <ContactMethod icon="linkedin" label="LinkedIn" value="linkedin.com/in/michaeljosiah"/>
            <ContactMethod icon="map-pin" label="Location" value="Global \u2022 Remote-First"/>
            <ContactMethod icon="clock" label="Response time" value="I typically reply within 24\u201348 hours."/>
          </div>
        </Panel>
      </div>
      <Panel padded={false} style={{position:'relative',overflow:'hidden',display:'grid',gridTemplateColumns:'1.4fr 1fr'}}>
        <div style={{padding:'var(--pad-panel)'}}>
          <Eyebrow>Let's build something extraordinary</Eyebrow>
          <p style={{marginTop:'var(--sp-3)',font:'var(--fw-regular) var(--fs-body-sm)/var(--lh-body) var(--font-body)',color:'var(--text-muted)'}}>
            I'm always open to discussing new ideas, creative collaborations,<br/>speaking opportunities, or ways technology can solve meaningful problems.</p>
          <Button variant="outline-gold" size="sm" style={{marginTop:'var(--sp-5)'}} onClick={()=>onNavigate('Projects')}>View my projects</Button>
        </div>
        <div style={{background:'url(../../assets/img-studio-desk.png) center/cover'}}/>
      </Panel>
      <Panel padded={false} style={{display:'flex'}}>
        {[['heart','Purpose driven',['Building with meaning','and impact.']],
          ['lightbulb','Innovation first',["Exploring what's next",'and pushing boundaries.']],
          ['users','People focused',['Empowering creators,','teams and communities.']],
          ['shield','Integrity always',['Leading with honesty,','clarity and respect.']]].map(([i,t,l],n)=>
          <ValueCard key={t} icon={i} title={t} lines={l} style={{flex:1,borderLeft:n?'1px solid var(--line-hairline)':'none'}}/>)}
      </Panel>
      <QuoteBlock image="../../assets/img-horizon-ring.png" quote="The best way to predict the future is to build it — together." attribution="Michael Josiah" style={{minHeight:150,alignItems:'center'}}/>
    </div>
  </div>;
}
Object.assign(window,{ContactScreen});
