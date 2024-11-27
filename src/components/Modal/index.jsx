import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { IoCloseOutline } from "react-icons/io5";
import axios from "axios"; // Import axios for API calls
import { ID, TOKEN } from "../../api_tokens"; // Assuming you have API tokens
import { useModalStore } from "../../store/context"; // Modal store for opening/closing
import { ToastContainer, toast } from "react-toastify"; // Toast notifications
import "react-toastify/dist/ReactToastify.css"; // Import toast styles

const Modal = () => {
  const [status, setStatus] = useState(""); // To track status messages (success/failure)
  const { modal, closeModal } = useModalStore(); // To control modal state
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitted }, // Access errors and submission state
  } = useForm(); // Using react-hook-form
  const [submitting, setSubmitting] = useState(false); // Track submitting state

  // Effect to disable/enable scrolling
  useEffect(() => {
    if (modal) {
      document.body.style.overflow = "hidden"; // Prevent background scroll when modal is open
    } else {
      document.body.style.overflow = ""; // Reset scroll when modal is closed
    }
    return () => {
      document.body.style.overflow = ""; // Clean up on component unmount
    };
  }, [modal]);

  // Close modal when clicking outside of modal content
  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  // Handle form submission
  async function submitForm(data) {
    const message = `Новый клиент
Имя: ${data.name_client}
Номер телефона: ${data.tel_number}
Электронная почта: ${data.email}
Сообщение: ${data.message}
    `;
    const url = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

    setSubmitting(true); // Set submitting state to true

    try {
      const response = await axios.post(url, {
        chat_id: ID,
        text: message,
      });

      if (response.data.ok) {
        toast.success("Ваш запрос успешно отправлен");
        closeModal();
        reset(); // Reset form after successful submission
      } else {
        setStatus("Не удалось отправить сообщение");
      }
    } catch (err) {
      setStatus("Произошла ошибка при отправке сообщения. Попробуйте снова.");
    } finally {
      setSubmitting(false); // Reset submitting state
    }
  }

  return (
    <>
      {/* Modal */}
      {modal && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={handleBackgroundClick} // Close modal on background click
        >
          <div
            className="rounded-lg overflow-hidden w-96"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking modal content
          >
            {/* Heading */}
            <div className="flex p-6 justify-between items-center bg-blue-400">
              <h1 className="text-center text-white text-xl font-semibold">
                Как с нами связаться
              </h1>
              <IoCloseOutline
                onClick={closeModal}
                className="text-3xl text-white cursor-pointer"
              />
            </div>

            {/* Contact Form */}
            <div className="bg-white p-6">
              <form onSubmit={handleSubmit(submitForm)}>
                {/* Name Input */}
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-1"
                  >
                    Имя
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    {...register("name_client", {
                      required: "Это поле обязательно",
                    })}
                  />
                  {isSubmitted && errors.name_client && (
                    <p className="text-red-600 text-xs">
                      {errors.name_client.message}
                    </p>
                  )}
                </div>

                {/* Phone Input */}
                <div className="mb-4">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium mb-1"
                  >
                    Номер телефона
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    {...register("tel_number", {
                      required: "Это поле обязательно",
                    })}
                  />
                  {isSubmitted && errors.tel_number && (
                    <p className="text-red-600 text-xs">
                      {errors.tel_number.message}
                    </p>
                  )}
                </div>

                {/* Email Input */}
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-1"
                  >
                    Электронная почта
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    {...register("email", { required: "Это поле обязательно" })}
                  />
                  {isSubmitted && errors.email && (
                    <p className="text-red-600 text-xs">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Message Input */}
                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-1"
                  >
                    Чем мы можем вам помочь?
                  </label>
                  <textarea
                    id="message"
                    className="w-full p-1 border border-gray-300 rounded-md placeholder:text-sm"
                    {...register("message", {
                      required: "Это поле обязательно",
                    })}
                  ></textarea>
                  {isSubmitted && errors.message && (
                    <p className="text-red-600 text-xs">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
                  disabled={submitting} // Disable the button when submitting
                >
                  {submitting ? "Отправка..." : "Отправить"}
                </button>
              </form>

              {/* Status Message */}
              {status && <p className="text-red-600 text-xs mt-2">{status}</p>}

              <p className="text-xs text-center text-gray-500 mt-4">
                Не указывайте конфиденциальную информацию, доступ к которой вы
                не хотите предоставлять этой компании.
              </p>
            </div>
          </div>
          <ToastContainer />
        </div>
      )}
    </>
  );
};

export default Modal;
