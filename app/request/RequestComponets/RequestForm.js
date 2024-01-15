import PlaceSearchOrigin from "./PlaceSearchOrigin";

export default function RequestForm() {
  return (
    <form className="flex flex-col mt-5 mx-2">
      <PlaceSearchOrigin />
      <input
        className="bg-black my-2 h-10 rounded-xl text-white font-bold p-2"
        placeholder="Your destination"
      />
      <div className="flex justify-center items-center">
        <button
          className="bg-blue-600 text-white font-bold my-2 px-10 py-2 rounded-2xl"
          type="submit"
        >Submit</button>
      </div>
    </form>
  )
}
