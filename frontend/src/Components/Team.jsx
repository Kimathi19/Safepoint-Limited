import Breta from "../Pages/Assets/Safepoint logo.png";
import Brian from "../Pages/Assets/Safepoint logo.png";
import Fatma from "../Pages/Assets/Safepoint logo.png";
import Mark from "../Pages/Assets/Safepoint logo.png";
import Alex from "../Pages/Assets/Safepoint logo.png";
import Jane from "../Pages/Assets/Safepoint logo.png";

const teamMembers = [
  {
    id: 1,
    src: Breta,
    // name: "John Doe",
    role: "Director",
    description:
      "Leading Safepoint's vision and strategic direction with expertise in safety solutions.",
  },
  {
    id: 2,
    src: Brian,
    // name: "Jane Doe",
    role: "Operations Manager",
    description:
      "Oversees daily operations, ensuring all safety protocols and standards are met.",
  },
  {
    id: 3,
    src: Fatma,
    // name: "Bob Doe",
    role: "Quality Assurance Specialist",
    description:
      "Focused on maintaining the highest safety and quality standards across all products.",
  },
  {
    id: 4,
    src: Mark,
    // name: "Alice Doe",
    role: "Safety Consultant",
    description:
      "Provides expert advice on safety compliance and risk management strategies.",
  },
  
];

const Team = () => {
  return (
    <div className="team-wrapper grid grid-cols sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-center items-center mx-auto py-4 ">
      {teamMembers.map((member) => (
        <div
          key={member.id}
          className="card p-4 w-[250px] space-y-2 rounded-lg shadow-md text-center"
        >
          <img
            src={member.src}
            alt={`${member.name}'s photo`}
            className="w-[200px] h-[200px] object-cover rounded-md mx-auto"
          />
          <h1 className="name font-bold text-lg mt-4">{member.name}</h1>
          <h2 className="role font-semibold text-sm text-gray-500">
            {member.role}
          </h2>
          <p className="description text-gray-600 text-sm">
            {member.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Team;
