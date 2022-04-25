import styled from "styled-components";

const Link = styled.a`
  color: #ffffff;
`;

export const Intro = () => {
  return (
    <div>
      <h2>HELP PREVENT ORE MINING IN THE CEDERBERG</h2>

      <p>
        ({" "}
        <Link href="https://drive.google.com/drive/folders/1-5qtAGcDcZlVuPav0q0kQFUOQMIMpEbP" target="_blank">
          origionally from here
        </Link>{" "}
        )
      </p>
      <p>
        Registering as an Interested and Affected Party (IAP) and sending comments regarding the application by Orren
        Capital (Pty) Ltd and TPR Mining Resources (Pty) Ltd to undertake prospecting activities in the Cederberg
      </p>

      <p>
        Background: Earlier this month (April), TPR Mining Resources (Pty) Ltd posted a public notice on behalf of Orren
        Capital (Pty) Ltd communicating their intention to prospect for iron and manganese near the Twee River in the
        heart of the Cederberg, a few kilometers from Suikerbossie Guest Farm.
      </p>

      <p>
        They have opened up a comment period during which members of the public can register as Interested and Affected
        Parties (IAPs) and send comments regarding the application.
      </p>

      <p>
        Why register? The environmental assessment practitioner (TPR in this case) is required to consider comments and
        concerns from the public. The more registered IAPs, the more it becomes evident that the public does not want
        this to happen. If you include your contact details when you register as an IAP, you will receive project
        updates.
      </p>

      <h2>What Next?</h2>
      <p>
        Please be aware that this entire process is client side.
        <br />
        None of your data leaves the browser - it does get used to generate the PDF (also in the browser).
        <br />
        That said, the process has 4 steps:
        <ol>
          <li>This introduction</li>
          <li>Enter your details</li>
          <li>Create the "randomised" comment section</li>
          <li>Generate the PDF</li>
        </ol>
      </p>
    </div>
  );
};
