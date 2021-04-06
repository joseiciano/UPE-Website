import Head from "next/head";
import ProgramList from "../components/ProgramList";

export default function Home() {
  return (
    <div>
      <h1 className="title">
        {" "}
        <span>Our Programs</span>{" "}
      </h1>
      <style jsx>
        {`
          .title {
            color: #ff9749;
            display: grid;
            text-align: center;
            font-weight: 900;
            font-size: 38px;
          }
        `}
      </style>
      <ProgramList />
    </div>
  );
}
