import { useForm } from "react-hook-form";

export default function Form() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
        firstName: "",
        lastName: ""
    }
  });
  /*const firstName = watch("firstName")
  const lastName = watch("lastName")
  const phone = watch("Phone");
  const email = watch("Email")
  */
  const onSubmit = (data) => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <div className="form-container">
      <div className="manifesto-container"><label className="manifesto">este informacion es necesaria para que usted pueda recoger su pedido</label></div>
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        
        <input {...register("firstName")} placeholder="Nombre" />
        
        <input {...register("lastName")} placeholder="Apellido" />
        
        <label className="campo">{errors.Phone?.message}</label>
        <input
          {...register("Phone", {
            required: "campo obligatorio",
            minLength: {
              value: 8,
              message: "8 digitos minimo",
            },
          })}
          placeholder="Telefono"
        />
        
        <input
          {...register("Email", { required: true })}
          placeholder="Correo"
        />
        <input type="submit" />
      </form>
    </div>
  );
}
