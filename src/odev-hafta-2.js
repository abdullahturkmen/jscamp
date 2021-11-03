let asalDetected = (sayiGeliyor) => {

    let asalKontrol = 0;
    for (let j = 2; j < sayiGeliyor; j++) {
        if (sayiGeliyor % j == 0) {
            asalKontrol++;
        }
    }
    if (asalKontrol == 0) {
        console.log(sayiGeliyor + ' sayısı asaldır');
    }
    else {
        console.log(sayiGeliyor + ' sayısı asal değildir');
    }

}

let arkadasSayiDetected = (sayiGeliyor, sayiDizisiGeliyor) => {

    let arkadasSayiCount = 0;
    for (let j = 0; j < sayiGeliyor; j++) {
        if (sayiGeliyor % j == 0) {
            arkadasSayiCount += j;
        }
    }

    //console.log(sayiGeliyor + " sayısının kendisi hariç bölenleri toplamı: " + arkadasSayiCount);

    let digerArkadasSayiCount = 0;
    for (let i = 0; i < sayiDizisiGeliyor.length; i++) {
        if (sayiDizisiGeliyor[i] == arkadasSayiCount) {
            for (let j = 0; j < sayiDizisiGeliyor[i]; j++) {
                if (sayiDizisiGeliyor[i] % j == 0) {
                    digerArkadasSayiCount += j;
                }
            }
            //console.log("Arkadaş - " + sayiDizisiGeliyor[i] + " sayısının kendisi hariç bölenleri toplamı : " + digerArkadasSayiCount);

            if (digerArkadasSayiCount == sayiGeliyor) {
                console.log("------" + sayiGeliyor + " ve " + sayiDizisiGeliyor[i] + " arkadaş sayılardır");
            }
        }
    }

}

let mukemmelSayiDetected = (numbers) => {


    for (let i = 1; i < 1000; i++) {
        //console.log("+++++++++" + i);
        let mukemmelSayiCount = 0;
        for (let j = 1; j < i; j++) {
            if (i % j == 0) {
                mukemmelSayiCount += j;
            }
        }
        if (mukemmelSayiCount == i) {
            console.log("------Çok Mükemmel Bir Sayı : " + mukemmelSayiCount);
        }

    }
    //console.log("------------" + mukemmelSayiCount);
}

let bineKadarAsalToplama = (numbers) => {
//burası girilen sayılardan bine kadar olanların asallarını alıp toplar
    let asalCount = 0;
    for (let i = 0; i < numbers.length; i++) {

        if (numbers[i] < 1000) {

            let asalKontrolEt = 0;

            for (let j = 2; j < numbers[i]; j++) {
                if (numbers[i] % j == 0) {
                    asalKontrolEt++;
                }
            }

            if (asalKontrolEt == 0) {
                asalCount += numbers[i];
            }

        }

    }

    console.log("--------1000' e kadar girilen asal sayıların toplamı: " + asalCount);

}

function istedigimizKadarSayi(...numbers) {

    mukemmelSayiDetected(numbers);
    bineKadarAsalToplama(numbers);

    for (let i = 0; i < numbers.length; i++) {

        asalDetected(numbers[i]);
        arkadasSayiDetected(numbers[i], numbers);

    }
}

istedigimizKadarSayi(5, 7, 12, 50, 100, 43, 284, 220);

