import Modal from "..";
import Image from "next/image";
import Footer from "@/components/footer";

const SuccessModal = ({ setOpenModal, openModal }) => {
  return (
    <Modal
      setOpen={() => setOpenModal(!openModal)}
      open={openModal}
      title=""
      addStyle={"sm:my-8 w-full md:w-5/12 sm:p-4"}
    >
      <div className="p-2 md:p-4">
        <div className="flex justify-center">
        <Image src='/success.gif' alt="" width={200} height={200} />
        </div>
        <div className="text-center">
          <h1 className="text-3xl capitalize py-3">We have added you to the waitlist!</h1>
        <p className=" text-sm text-gray-700 capitalize">We will let you know when Arivla is ready.</p>
        </div>
      </div>
        <Footer />
    </Modal>
  );
};

export default SuccessModal;
