export default function Experience() {
  const tech = ["Java", "Spring Boot", "JWT", "Docker", "JPA"];

  return (
    <section id="experience" className="section-shell py-6">
      <div className="group overflow-hidden rounded-2xl border border-[#F5C9D9] bg-pink-100/30 p-8 shadow-[0_16px_45px_rgba(255,141,183,0.1)] transition duration-300 hover:-translate-y-1 hover:border-[#FF8DB7] hover:shadow-[0_20px_55px_rgba(232,82,122,0.14)]">
        {" "}
        <p className="mb-2 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#E8527A]">
          Experience
        </p>
        <h2 className="font-serif text-4xl text-[#1A1118]">
          Backend Engineering Intern
        </h2>
        <p className="my-2 font-mono font-bold text-xs uppercase tracking-[0.12em] text-[#9E7B8E]">
          Tata Consultancy Services • May 2026 – Present
        </p>
        <ul className="mt-6 space-y-3 text-[#5C3D52]">
          <li className="flex gap-3">
            <span className="mt-2 h-2 w-2 rounded-full bg-[#E8527A]" />
            <span>
              Built a telecom e-commerce backend with Spring Boot, supporting
              plans, devices, add-ons, bundle offers, cart management, checkout,
              payments, and order processing
            </span>
          </li>

          <li className="flex gap-3">
            <span className="mt-2 h-2 w-2 rounded-full bg-[#E8527A]" />
            <span>
              Implemented dynamic pricing, coupon validation, bundle discount
              calculation, inventory tracking, subscription management, plan
              validity handling, and order history workflows
            </span>
          </li>

          <li className="flex gap-3">
            <span className="mt-2 h-2 w-2 rounded-full bg-[#E8527A]" />
            <span>
              Secured APIs using JWT authentication, Spring Security RBAC, DTO
              validation, and microservice-based authentication with
              inter-service REST communication
            </span>
          </li>
        </ul>
        <div className="mt-6 flex flex-wrap gap-2">
          {tech.map((item) => (
            <span
              key={item}
              className="rounded-md bg-[#FCE8EF] px-2.5 py-1 font-mono text-[10px] tracking-wide text-[#D6638A]"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
