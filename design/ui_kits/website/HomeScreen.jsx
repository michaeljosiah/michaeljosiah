const NS=()=>window.MichaelJosiahDesignSystem_bafdc6;
function HomeScreen({onNavigate}){
  const {PageHero,RoleList,StatTriad,Button,SectionHeader,PillarCard,CapabilityStrip,QuoteBlock,SocialRail}=NS();
  return <div style={{display:'flex'}}>
    <SocialRail style={{alignSelf:'stretch',minHeight:'100%'}} links={[{icon:'linkedin',label:'LinkedIn'},{icon:'instagram',label:'Instagram'},{icon:'youtube',label:'YouTube'},{icon:'mail',label:'Email'}]}/>
    <div style={{flex:1,minWidth:0}}>
      <div style={{position:'relative'}}>
        <PageHero minHeight={470} contentWidth="48%" eyebrow="Engineer. Creator. Technologist. Dreamer. Leader."
          lines={['I build worlds.',"I build what's next."]} level={1}
          blurb={<>I merge imagination with engineering to create<br/>stories, platforms and AI systems that transform<br/>businesses and inspire the future.</>}
          image="../../assets/hero-portrait.png">
          <div style={{display:'flex',gap:'var(--sp-3)',marginTop:'var(--sp-3)'}}>
            <Button onClick={()=>onNavigate('Projects')}>Explore my work</Button>
            <Button variant="secondary" showIcon={false} onClick={()=>onNavigate('About')}>About me</Button>
          </div>
          <StatTriad style={{marginTop:'var(--sp-7)'}} stats={[{value:'15+',label:'Years experience'},{value:'3',label:'Core pillars'},{value:'\u221E',label:'Possibilities'}]}/>
        </PageHero>
        <div style={{position:'absolute',right:0,top:0,bottom:0,width:300,display:'flex',alignItems:'flex-start',justifyContent:'flex-end',padding:'var(--sp-8) var(--pad-shell)',background:'var(--scrim-right)',pointerEvents:'none'}}>
        <RoleList style={{width:210,pointerEvents:'auto'}} roles={[
          {icon:'feather',title:'Storyteller',lines:['I craft narratives','that inspire']},
          {icon:'code',title:'Engineer',lines:['I build platforms','that empower']},
          {icon:'box',title:'Innovator',lines:['I design systems','that scale']},
          {icon:'eye',title:'Visionary',lines:['I shape the future','with purpose']}]}/>
        </div>
      </div>
      <div style={{padding:'var(--gutter-section) var(--pad-shell)',display:'flex',flexDirection:'column',gap:'var(--sp-8)'}}>
        <SectionHeader eyebrow="Three worlds. One mission." title="What I create"/>
        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'var(--gutter-card)',alignItems:'stretch'}}>
          <PillarCard onOpen={()=>onNavigate('Projects')} image="../../assets/img-story-world.png" wordmark="Arke" sub="Studio"
            eyebrow="Story worlds" title="Arke Studio" cta="Explore Arke Studio"
            blurb="A creative platform for writers and creators to build stories, worlds and interactive experiences."/>
          <PillarCard onOpen={()=>onNavigate('Projects')} image="../../assets/img-ai-lattice.png" wordmark="Aonik" sub="Platform"
            eyebrow="AI platforms" eyebrowTone="var(--tag-ai)" title="AONIK" cta="Explore Aonik"
            blurb="AI platforms and agents for the future of business in an intelligent, agentic world."/>
          <PillarCard onOpen={()=>onNavigate('Journal')} image="../../assets/img-studio-desk.png"
            eyebrow="Writing & production" title="Stories That Last" cta="View stories"
            blurb="From concept to screen. I write and produce cinematic stories across books, film and interactive media."/>
        </div>
        <CapabilityStrip items={[{icon:'brain',label:'AI'},{icon:'cloud',label:'Cloud'},{icon:'code',label:'Code'},{icon:'layers',label:'Data'},{icon:'pen-tool',label:'Design'},{icon:'target',label:'Story'}]}/>
        <QuoteBlock align="center" style={{border:0,background:'transparent',padding:0,justifyContent:'center'}}
          quote="Imagination is the beginning of creation. Technology is how we bring it to life." attribution="Michael Josiah"/>
      </div>
    </div>
  </div>;
}
Object.assign(window,{HomeScreen});
