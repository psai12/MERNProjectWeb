import './PicGallery.css';

function PicGallery({prop1,prop2,prop3})
{
  return (
    <div className="PicGallery">
     <div className='SectionOne'>
        <img src={prop1.img} width="300" height="300"/>
        <h4>{prop1.title}</h4>
        <h5>{prop1.description}</h5>
     </div>
     <div className='SectionOne'>
        <img src={prop2.img} width="300" height="300"/>
        <h4>{prop2.title}</h4>
        <h5>{prop2.description}</h5>
     </div>
     <div className='SectionOne'>
        <img src={prop3.img} width="300" height="300"/>
        <h4>{prop3.title}</h4>
        <h5>{prop3.description}</h5>
     </div>
    </div>
  );
}

export default PicGallery;