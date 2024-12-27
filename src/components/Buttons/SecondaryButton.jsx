export function SecondaryButton({ btnClass, isImageBtn, btnText }) {
  return (
    <button className="p-4 bg-silver shadow-innerCustomSilver hover:translate-y-1 hover:shadow-none">
     {isImageBtn }
    </button>
  );
}
