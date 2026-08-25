const NS=()=>window.MichaelJosiahDesignSystem_bafdc6;
const PROJECTS=[
  {cat:'Story world',tone:'story',title:'Awaken – Embers of the Fallen',mark:'feather',img:'img-story-world',blurb:'A cinematic dark fantasy series exploring the hidden war between Elysians, humanity and dimensions beyond.',group:'Story worlds'},
  {cat:'Story platform',tone:'story',title:'Arke Studio',mark:'triangle',img:'img-studio-desk',blurb:'A creative platform for writers and creators to build stories, worlds and immersive narratives together.',group:'Story worlds'},
  {cat:'AI platform',tone:'ai',title:'Aonik',mark:'triangle',img:'img-ai-lattice',blurb:'AI platforms and agents for the future of business in an intelligent, agentic world.',group:'AI platforms'},
  {cat:'Engineering',tone:'engineering',title:'Nexus Core',mark:'hexagon',img:'img-code-screens',blurb:'Backend infrastructure and mission systems for real-time data, security and operations at scale.',group:'Engineering'},
  {cat:'Tools & systems',tone:'story',title:'MJ Dev Suite',mark:'code',img:'img-code-screens',blurb:'A collection of developer tools, libraries and systems designed to accelerate productivity and innovation.',group:'Tools & systems'},
  {cat:'Experiment',tone:'experiment',title:'Project Origin',mark:'circle-dot',img:'img-horizon-ring',blurb:'Exploring the boundaries of AI, storytelling and interactive media through experimental prototypes.',group:'Experiments'}];
const CATS=[{label:'All projects',icon:'layout-grid',count:14},{label:'Story worlds',icon:'feather',count:4},{label:'AI platforms',icon:'triangle',count:3},{label:'Tools & systems',icon:'wrench',count:3},{label:'Engineering',icon:'layers',count:2},{label:'Entrepreneurship',icon:'bar-chart-3',count:1},{label:'Experiments',icon:'target',count:1}];
function ProjectsScreen({onNavigate}){
  const {PageHero,CategorySidebar,Select,ProjectCard,QuoteBlock,CTABanner}=NS();
  const [cat,setCat]=React.useState('All projects');
  const [sort,setSort]=React.useState('Featured');
  const list=cat==='All projects'?PROJECTS:PROJECTS.filter(p=>p.group===cat);
  return <div>
    <PageHero minHeight={300} eyebrow="What I create" lines={['Ideas. Engineered.','Built to inspire.']} level={2}
      image="../../assets/hero-portrait.png"
      blurb={<>I build stories, platforms and systems that live at the intersection<br/>of imagination and engineering — creating impact at scale.</>}/>
    <div style={{display:'grid',gridTemplateColumns:'240px 1fr',gap:'var(--gutter-card)',padding:'var(--sp-7) var(--pad-shell)'}}>
      <div style={{display:'flex',flexDirection:'column',gap:'var(--sp-6)'}}>
        <div style={{background:'var(--surface-panel)',border:'1px solid var(--line-hairline)',borderRadius:'var(--radius-md)',overflow:'hidden'}}>
          <div style={{padding:'var(--sp-4) var(--sp-4) var(--sp-3)',font:'var(--fw-medium) var(--fs-label)/1 var(--font-display)',letterSpacing:'var(--ls-caps-wide)',textTransform:'uppercase',color:'var(--text-accent)'}}>Explore projects</div>
          <CategorySidebar items={CATS} active={cat} onSelect={setCat}/>
        </div>
        <QuoteBlock quote="Technology is how we bring imagination to life." attribution="Michael Josiah" style={{fontSize:'var(--fs-h3)'}}/>
      </div>
      <div>
        <div style={{display:'flex',alignItems:'center',gap:'var(--sp-3)',marginBottom:'var(--sp-5)'}}>
          <span style={{font:'var(--fw-medium) var(--fs-h4)/1 var(--font-display)',letterSpacing:'var(--ls-caps)',textTransform:'uppercase',color:'var(--text-heading)'}}>{cat}</span>
          <span style={{color:'var(--text-faint)'}}>/</span>
          <span style={{font:'var(--fw-medium) var(--fs-h4)/1 var(--font-display)',color:'var(--text-accent)'}}>{cat==='All projects'?14:list.length}</span>
          <Select style={{marginLeft:'auto'}} label="Sort by:" value={sort} options={['Featured','Newest','A\u2013Z']} onChange={setSort}/>
        </div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'var(--gutter-grid)',alignItems:'stretch'}}>
          {list.map(p=><ProjectCard key={p.title} image={'../../assets/'+p.img+'.png'} category={p.cat} categoryTone={p.tone} title={p.title} markIcon={p.mark} blurb={p.blurb}/>)}
        </div>
      </div>
    </div>
    <div style={{padding:'0 var(--pad-shell) var(--sp-9)'}}>
      <CTABanner title="Have an idea worth building?" blurb="Let's connect and create something extraordinary." cta="Let's build together" onAction={()=>onNavigate('Contact')}/>
    </div>
  </div>;
}
Object.assign(window,{ProjectsScreen});
