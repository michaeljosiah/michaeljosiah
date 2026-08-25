const NS=()=>window.MichaelJosiahDesignSystem_bafdc6;
const LIST=[
  {date:'May 20, 2025',cat:'AI & Tech',tone:'ai',title:'The Rise of Agentic Systems',blurb:'Why the next era of business will be defined by autonomous capabilities.',read:'6 min read',img:'img-ai-lattice'},
  {date:'May 12, 2025',cat:'Engineering',tone:'engineering',title:'Engineering Meaningful Systems',blurb:"It's not just about code. It's about solving real problems for real people.",read:'8 min read',img:'img-code-screens'},
  {date:'May 5, 2025',cat:'Leadership',tone:'story',title:'Leading in an Uncertain Future',blurb:'Principles that ground me as I build, lead and inspire others.',read:'5 min read',img:'img-horizon-ring'}];
const GRID=[
  {date:'Apr 28, 2025',cat:'Storytelling',tone:'story',title:'The Power of Myth',blurb:'Why ancient myths still shape the stories we tell today.',read:'7 min read',img:'img-studio-desk'},
  {date:'Apr 18, 2025',cat:'AI & Tech',tone:'ai',title:'Designing with Intelligence',blurb:'Human-centered AI is the key to a better future.',read:'6 min read',img:'img-ai-lattice'},
  {date:'Apr 8, 2025',cat:'Life',tone:'life',title:'Dream. Build. Repeat.',blurb:'A personal note on discipline, resilience and purpose.',read:'4 min read',img:'img-horizon-ring'}];
function JournalScreen(){
  const {PageHero,FilterTabs,SearchInput,FeaturedArticleCard,ArticleCard,SubscribePanel}=NS();
  const [tab,setTab]=React.useState('All');
  const [q,setQ]=React.useState('');
  const match=a=>(tab==='All'||a.cat===tab)&&a.title.toLowerCase().includes(q.toLowerCase());
  return <div>
    <PageHero minHeight={280} eyebrow="Journal" lines={['Thoughts.','Insights.','Ideas in progress.']} level={2}
      image="../../assets/hero-portrait.png"
      blurb={<>A space where I share ideas, lessons, experiments<br/>and perspectives on engineering, creativity,<br/>AI and the future.</>}/>
    <div style={{padding:'var(--sp-6) var(--pad-shell) var(--sp-9)',display:'flex',flexDirection:'column',gap:'var(--sp-6)'}}>
      <div style={{display:'flex',alignItems:'center',gap:'var(--sp-6)',padding:'var(--sp-2) var(--sp-4)',background:'var(--surface-panel)',border:'1px solid var(--line-hairline)',borderRadius:'var(--radius-md)'}}>
        <FilterTabs items={['All','Storytelling','Engineering','AI & Tech','Leadership','Life']} active={tab} onChange={setTab}/>
        <SearchInput style={{marginLeft:'auto'}} placeholder="Search journal..." value={q} onChange={e=>setQ(e.target.value)}/>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1.1fr',gap:'var(--gutter-grid)',alignItems:'stretch'}}>
        <FeaturedArticleCard image="../../assets/img-story-world.png" date="May 28, 2025" category="Storytelling"
          title="Building Worlds That Move Hearts" blurb="On crafting stories that transcend entertainment and create lasting impact."/>
        <div style={{display:'flex',flexDirection:'column',gap:'var(--gutter-grid)'}}>
          {LIST.filter(match).map(a=><ArticleCard key={a.title} layout="horizontal" style={{flex:1}} image={'../../assets/'+a.img+'.png'} date={a.date} category={a.cat} categoryTone={a.tone} title={a.title} blurb={a.blurb} readTime={a.read}/>)}
        </div>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'var(--gutter-grid)',alignItems:'stretch'}}>
        {GRID.filter(match).map(a=><ArticleCard key={a.title} layout="vertical" image={'../../assets/'+a.img+'.png'} date={a.date} category={a.cat} categoryTone={a.tone} title={a.title} blurb={a.blurb} readTime={a.read}/>)}
      </div>
      <SubscribePanel/>
    </div>
  </div>;
}
Object.assign(window,{JournalScreen});
