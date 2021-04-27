const Page = () => {
    const address = `root@fsoc.space
+43 699 17057679

Laurenz Weixlbaumer
Hittmairstraße 64
4020 Linz
Austria`;
    
    return (<>
        <div className={'container prose'}>
            <p>
                <b>Imprint</b> as required by Austrian law (see § 63 GewO).
            </p>

            <pre className={'mb-2'}>
                {address}
            </pre>

            <p>
                Kleinunternehmer, Umsatzsteuerfrei nach § 6(1)27 UStG.
                Mitglied der Wirtschaftskammer OÖ, Fachgruppe 704 (Informationstechnologie). 
            </p>
        </div>
    </>);
};

export default Page;
