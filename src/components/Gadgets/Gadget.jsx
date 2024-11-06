
import DetailsPage from "./DetailsPage";


const Gadget = ({ gadget }) => {
  const { title, image, price, warranty } = gadget;


  return (
    <div>
      {  
        <div className="card bg-base-100 shadow-md p-7 rounded-3xl">
          <figure>
            <img
              className="bg-[#D9D9D9] rounded-3xl p-8"
              src={image}
              alt={title}
            />
          </figure>
          <div className="card-body space-y-2">
            <h2 className="card-title text-2xl font-semibold">{title}</h2>
            <h4 className="font-semibold ">Price: {price}</h4>
            <p className="font-semibold ">warranty: {warranty}</p>

            <DetailsPage gadget={gadget}></DetailsPage>
          </div>
        </div>
      }
    </div>
  );
};

export default Gadget;
