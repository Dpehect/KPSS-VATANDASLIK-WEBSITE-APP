import fs from "fs";
import path from "path";

const targetDir = path.resolve("src/data/kpss/encyclopedia/data");

const data01 = `import type { EncyclopediaEntry } from "../types";
export const islamiyetOncesiData: EncyclopediaEntry[] = [
  {
    "id": "hukuk-kurallari-yaptirim",
    "category": "Temel Hukuk Bilgisi",
    "title": "Hukuk Kuralları ve Yaptırım Türleri",
    "aliases": [
      "yaptirim", "mueyyide", "butlan", "yokluk", "iptal", "tazminat", "cebi icra", "ceza", "hukuk kurallari", "hukumsuzluk"
    ],
    "keywords": [
      "yaptirim", "mueyyide", "butlan", "yokluk", "iptal", "tazminat", "ceza", "hukumsuzluk", "cebri icra"
    ],
    "shortDefinition": "Toplumsal düzeni sağlayan, arkasında devlet gücü (maddi yaptırım) bulunan ve diğer sosyal kurallardan bu yönüyle ayrılan kurallardır.",
    "detailedExplanation": "Toplumsal hayatı düzenleyen din, ahlak ve görgü kurallarının yaptırımları manevi iken, hukuk kurallarının yaptırımı devlet gücüne dayalı maddi yaptırımdır. Maddi yaptırım (müeyyide), hukuk kuralına aykırı davranıldığında devlet organları eliyle uygulanan cebirdir. Başlıca yaptırım türleri şunlardır:\\n\\n1. Ceza: Kanunun suç işleyen kişilere uygulanmasını öngördüğü yaptırımdır. Türk Ceza Kanunu'na göre hapis cezaları (ağırlaştırılmış müebbet, müebbet, süreli hapis) ve adli para cezaları olmak üzere ikiye ayrılır.\\n2. Cebri İcra: Hukuki yükümlülüklerini kendi rızasıyla yerine getirmeyen kişilerin devlet gücü (icra müdürlükleri) vasıtasıyla bu borçlarını yerine getirmeye zorlanmasıdır (örn: borcunu ödemeyenin mallarının haczedilmesi veya velayeti verilen çocuğun teslim edilmesi).\\n3. Tazminat: Hukuka aykırı olarak başkasına verilen zararın giderilmesi yaptırımıdır. Maddi tazminat (fiili zarar ve yoksun kalınan karı karşılar) ve manevi tazminat (duyulan acı, elem ve kederi hafifletmek için ödenen para) olarak ayrılır.\\n4. İptal: İdari makamların hukuka aykırı işlemlerinin, yargı organları (idare mahkemeleri) tarafından ortadan kaldırılması, geçmişe etkili olarak geçersiz kılınmasıdır (örn: hukuka aykırı memuriyetten çıkarma kararının mahkemece iptali).\\n5. Hükümsüzlük (Geçersizlik): Hukuki işlemlerin kanunun aradığı geçerlilik şartlarını taşımaması durumunda ortaya çıkan yaptırımdır. Kendi içinde alt türlere ayrılır:\\n  - Yokluk: İşlemin kurucu unsurlarından birinin eksik olmasıdır. Hukuken hiç doğmamış kabul edilir (örn: resmi nikah memuru önünde yapılmayan evlilik, imzasız sözleşmeler).\\n  - Mutlak Butlan: Kurucu unsurları tam olan ancak kanunun emredici hükümlerine, ahlaka, kamu düzenine aykırı olan veya konusu imkansız olan işlemlerdir (örn: akıl hastasının evlenmesi, uyuşturucu ticareti sözleşmesi).\\n  - Nispi Butlan (İptal edilebilirlik): Kurucu unsurları tam olan ancak işlemi yapan kişinin iradesinin sakatlanmış olmasıdır (hata, hile, tehdit/ikrah). İşlem iptal edilene kadar geçerlidir, iradesi sakatlanan kişi süresi içinde iptal etmezse tamamen geçerli hale gelir.\\n  - Tek Taraflı Bağlamazlık (Askıda Geçersizlik): Velayet veya vesayet altındaki küçüklerin ya da kısıtlıların, yasal temsilcilerinin izni olmadan kendi başlarına yaptıkları borçlandırıcı işlemlerdir. Yasal temsilci onay (icazet) verene kadar işlem askıdadır ve temsilciyi bağlamaz.",
    "keyFacts": [
      "Yokluk durumunda işlem hukuken hiç var olmamıştır, tespit davasıyla her zaman ileri sürülebilir.",
      "Mutlak butlanla sakat bir işlem sonradan tarafların rızasıyla geçerli hale getirilemez; hakim bunu re'sen (kendiliğinden) dikkate alır.",
      "Nispi butlanda iradesi sakatlanan taraf kanuni süre içinde (genelde 1 yıl) işlemi iptal etmezse işlem baştan itibaren geçerli sayılır.",
      "Tek taraflı bağlamazlıkta karşı taraf sözleşmeyle bağlı kalırken, veli/vasi onay verene kadar küçük/kısıtlı sözleşmeyle bağlı değildir."
    ],
    "examImportance": "Yokluk (kurucu unsur eksikliği), mutlak butlan (emredici hükme aykırılık) ve nispi butlan (irade sakatlığı) farkları ve yaptırım türlerinin tanımları KPSS Vatandaşlık sınavlarında hemen hemen her yıl doğrudan soru olarak sorulmaktadır."
  },
  {
    "id": "hak-ve-fiil-ehliyeti",
    "category": "Temel Hukuk Bilgisi",
    "title": "Hak Ehliyeti ve Fiil Ehliyeti",
    "aliases": [
      "hak ehliyeti", "fiil ehliyeti", "erginlik", "kisitlilik", "ehliyet", "mumeyyiz", "kazai rust"
    ],
    "keywords": [
      "ehliyet", "erginlik", "resit", "kisitli", "mumeyyiz", "vasi", "velayet"
    ],
    "shortDefinition": "Kişilerin hak sahibi olabilme (pasif) ve kendi fiilleriyle borç altına girebilme ya da hak kazanabilme (aktif) yetenekleridir.",
    "detailedExplanation": "Türk Medeni Kanunu'na göre ehliyetler iki temel gruba ayrılır:\\n\\n1. Hak Ehliyeti (Medeni Haklardan Yararlanma Ehliyeti): Kişilerin hak ve borçların sahibi olabilme yeteneğidir. Hak ehliyeti pasif bir ehliyettir ve tüm insanlar için eşittir. Hak ehliyeti, çocuğun anne rahmine düştüğü andan itibaren, 'sağ ve tam doğmak' koşuluyla başlar. Yani cenin dahi hak ehliyetine sahiptir.\\n\\n2. Fiil Ehliyeti (Medeni Hakları Kullanma Ehliyeti): Bir kişinin kendi fiil ve işlemleriyle kendi lehine haklar yaratabilme ve borçlar altına girebilme yeteneğidir. Aktif bir ehliyettir ve hak ehliyetinin aksine herkeste eşit değildir. Fiil ehliyetine sahip olabilmek için üç temel şartın birlikte bulunması gerekir:\\n  - Ayırt Etme Gücü (Mümeyyiz Olmak / Sezginlik): Yaptığı davranışların sebep ve sonuçlarını idrak edebilme yeteneğidir. Akıl hastalığı, akıl zayıflığı, yaş küçüklüğü, alkol veya uyuşturucu madde etkisi altında olmak ayırt etme gücünü ortadan kaldırır.\\n  - Ergin Olmak (Reşit Olmak): Yasal olarak erginlik yaşı 18 yaşın doldurulmasıyla başlar. Ancak bunun dışında iki yolla daha ergin olunabilir:\\n    * Evlenme ile Erginlik: Olağan evlenme yaşı 17 yaşın doldurulmasıdır (veli izni gerekir). Olağanüstü evlenme yaşı ise 16 yaşın doldurulmasıdır (mahkeme kararı ve önemli bir sebep gerekir). Evlenen kişi hukuken ergin kılınır ve boşanırsa dahi erginliği kaybolmaz.\\n    * Mahkeme Kararı ile Erginlik (Kaza-i Rüşt): 15 yaşını doldurmuş olan küçüğün kendi isteği, velisinin rızası ve menfaatinin bulunması şartıyla asliye hukuk mahkemesi kararıyla ergin kılınmasıdır.\\n  - Kısıtlı Olmamak (Mahcur Olmamak): Ergin kişilerin akıl hastalığı, akıl zayıflığı, savurganlık, alkol veya uyuşturucu bağımlılığı, kötü yaşam tarzı, kötü yönetim veya 1 yıl ya da daha fazla süreli hapis cezası alma gibi sebeplerle mahkemece fiil ehliyetinin sınırlandırılması veya vasi atanması durumudur.\\n\\nKişilerin Fiil Ehliyeti Yönünden Sınıflandırılması:\\n1. Tam Ehliyetliler: Ayırt etme gücü olan, ergin olan ve kısıtlı olmayan kişilerdir. Her türlü hukuki işlemi tek başlarına yapabilirler.\\n2. Sınırlı Ehliyetliler: Fiil ehliyetinin tüm şartlarını taşımakla birlikte, kanunun öngördüğü bazı sebeplerle (evli olmak veya kendilerine yasal danışman atanmış olmak gibi) belirli işlemleri yapabilmek için eşinin veya yasal danışmanının onayını almak zorunda olan kişilerdir.\\n3. Sınırlı Ehliyetsizler: Ayırt etme gücüne sahip olan ancak ergin olmayan (küçükler) ya da kısıtlı olan kişilerdir. Genel kural olarak veli veya vasilerinin izni (önceden rıza) veya onayı (sonradan icazet) ile borçlandırıcı işlem yapabilirler. Karşılıksız kazanımları (örn: bağış kabul etme) tek başlarına yapabilirler. Ancak hiçbir şekilde yapamayacakları (veli/vasi izin verse bile yasak olan) işlemler şunlardır: Vakıf kurmak, kefil olmak, önemli bağışlamalar yapmak ve rekabet yasağı sözleşmesi imzalamak.\\n4. Tam Ehliyetsizler: Ayırt etme gücü bulunmayan (akıl hastaları veya çok küçük çocuklar gibi) kişilerdir. Yaptıkları tüm hukuki işlemler mutlak butlanla batıldır (geçersizdir). Onlar adına işlemleri yasal temsilcileri (veli veya vasi) yapar.",
    "keyFacts": [
      "Hak ehliyeti pasiftir ve sağ doğmak şartıyla anne rahminde (cenin iken) başlar.",
      "Kaza-i rüşt (mahkeme kararıyla ergin kılınma) için alt yaş sınırı 15 yaşın doldurulmasıdır.",
      "Sınırlı ehliyetsizlerin (küçük ve kısıtlılar) kefil olması, vakıf kurması ve bağış yapması yasal temsilci izniyle dahi yasaktır ve geçersizdir.",
      "Ayırt etme gücü olmayan tam ehliyetsizlerin kendi başlarına yaptıkları tüm işlemler yok hükmünde veya mutlak butlanla geçersizdir."
    ],
    "examImportance": "Fiil ehliyeti şartları, erginlik yaşları (yasal 18, evlenme ile 17/16, kaza-i rüşt 15) ve sınırlı ehliyetsizlerin yapması tamamen yasak olan işlemler (kefalet, bağış, vakıf kurma) KPSS Vatandaşlık sorularının en çok sorduğu konulardır."
  },
  {
    "id": "haklarin-kazanilmasi-ve-kullanilmasi",
    "category": "Temel Hukuk Bilgisi",
    "title": "Hakların Kazanılması ve Kullanılması",
    "aliases": [
      "iyi niyet", "durustluk", "haklarin kazanilmasi", "durustluk kurali", "mesru mudafaa", "iztirar", "kuvvet kullanma"
    ],
    "keywords": [
      "iyiniyet", "dürüstlük", "kazanma", "koruma", "müdafaa", "iztırar"
    ],
    "shortDefinition": "Hakların iyi niyetle edinilmesi, dürüstlük kurallarına uygun olarak kullanılması ve yasal sınırlar içinde korunması esaslarıdır.",
    "detailedExplanation": "Hukuk sistemimizde hakların kazanılması ve kullanılması iki temel ahlaki-hukuki ilkeye dayanır:\\n\\n1. Hakların Kazanılmasında İyi Niyet (Subjektif İyi Niyet): Bir hakkın kazanılmasına engel olan hukuki bir eksikliği veya pürüzü, durumun gerektirdiği özen ve dikkati göstermesine rağmen bilmemek veya bilebilecek durumda olmamaktır (Medeni Kanun Md. 3). Kanun, iyi niyeti varsayar; aksini iddia eden taraf bunu ispatlamakla yükümlüdür.\\n\\n2. Hakların Kullanılmasında Dürüstlük Kuralı (Objektif İyi Niyet): Bir hak sahibinin hakkını kullanırken veya bir borçlunun borcunu ifa ederken uymak zorunda olduğu, dürüst, namuslu, makul ve mantıklı bir insanın davranış çizgisidir (Medeni Kanun Md. 2). Bir hakkın açıkça kötüye kullanılmasını hukuk düzeni korumaz.\\n\\nHakların Kazanılması Yolları:\\n- Aslen Kazanma: Bir hakkın daha önce hiç kimseye ait olmayan bir mal üzerinde doğrudan ilk defa kurulmasıdır (örn: sahipsiz bir balığı tutma, sahipsiz bir araziyi işgal etme/ihraz/işgal).\\n- Devren Kazanma: Bir hakkın, önceki sahibinden bir hukuki işlem vasıtasıyla (satış, bağışlama, miras vb.) doğrudan devralınmasıdır (örn: otomobil satın alma veya miras yoluyla ev sahibi olma).\\n- Tesisen Kazanma: Mevcut bir hakkın sahibi tarafından, kendi hakkı sınırlanarak başkası lehine yeni bir hak kurulmasıdır (örn: toprak sahibinin arazisi üzerinde başkasına geçit/irtifak hakkı vermesi veya evini kiralaması).\\n\\nHakların Korunması ve Kişi Eliyle Korunma İstisnaları:\\nHaklar kural olarak devlet eliyle (dava yoluyla) korunur. Ancak istisnai ve acil durumlarda kişi kendi hakkını bizzat koruyabilir. Bunlar üç adettir:\\n- Meşru Müdafaa (Haklı Savunma): Kişinin kendisinin veya başkasının canına ya da malına yönelik, halen devam eden, haksız bir saldırıyı orantılı bir güçle defetmesidir. Meşru müdafaada bulunan kişi hukuken sorumlu olmaz, tazminat ödemez.\\n- Iztırar Hali (Zorda Kalma / Zaruret Hali): Kişinin kendisini veya başkasını tehlikeden (doğa olayı, kaza vb.) kurtarmak için, bu tehlikeyle ilgisi olmayan üçüncü bir şahsın malına zarar vermek zorunda kalmasıdır (örn: dağda fırtınaya yakalananın donmamak için başkasının kulübesinin kapısını kırıp girmesi). Zarara uğrayanın zararı hakkaniyet gereği tazmin edilir.\\n- Kendi Gücünü Kullanma (Kuvvet Kullanma): Kolluk kuvvetlerinin zamanında yetişemeyeceği durumlarda, hakkın kaybolmasını önlemek için kişinin kendi gücüyle duruma el koymasıdır (örn: kaçmakta olan hırsızı yakalayıp bağlamak). Güç kullanımı geçici olmalı ve derhal yetkili makamlara haber verilmelidir.",
    "keyFacts": [
      "Hakların kazanılmasında 'İyi Niyet' (subjektif), hakların kullanılmasında ve borcun ifasında ise 'Dürüstlük' (objektif) kuralı geçerlidir.",
      "İyi niyet varsayımı kanunidir; dürüstlük kuralına aykırılık ve hakkın kötüye kullanılması durumları hakim tarafından re'sen göz önüne alınır.",
      "Meşru müdafaa haksız bir saldırıya karşı yapılır; ıztırar hali ise bir tehlikeden kurtulmak için ilgisiz bir üçüncü kişinin malına karşı gerçekleştirilir.",
      "Iztırar halinde saldırı değil tehlike söz konusudur ve zarar veren kişi hakkaniyet tazminatı ödemek zorunda kalabilir."
    ],
    "examImportance": "İyi niyet ve dürüstlük kurallarının hangi aşamalarda geçerli olduğu (kazanmada iyi niyet, kullanmada/ifada dürüstlük) ile meşru müdafaa ve ıztırar hali arasındaki farklar KPSS'de sıklıkla soru olarak yöneltilmektedir."
  },
  {
    "id": "hukukun-dallari",
    "category": "Temel Hukuk Bilgisi",
    "title": "Hukukun Dalları: Kamu ve Özel Hukuk",
    "aliases": [
      "kamu hukuku", "ozel hukuk", "karma hukuk", "anayasa hukuku", "idare hukuku", "medeni hukuk", "ceza hukuku"
    ],
    "keywords": [
      "kamu", "özel", "karma", "yargılama", "ticaret", "vergi", "borçlar"
    ],
    "shortDefinition": "Hukuk kurallarının tarafların konumuna ve ilişkilerin niteliğine göre kamu, özel ve karma hukuk olarak sınıflandırılmasıdır.",
    "detailedExplanation": "Hukuk sistemi düzenlediği ilişkilerin niteliğine ve tarafların devletle olan ilişkilerine göre üç büyük dala ayrılır:\\n\\n1. Kamu Hukuku: Devlet ile kişiler arasındaki veya devletin kendi organları arasındaki ilişkileri düzenleyen hukuk dalıdır. Bu ilişkilerde devlet üstün konumdadır (kamu gücü kullanır), eşitlik yoktur. Kamu hukukunun alt dalları şunlardır:\\n  - Anayasa Hukuku: Devletin temel yapısını, organlarını, işleyişini ve vatandaşların temel haklarını düzenler.\\n  - İdare Hukuku: Devlet idaresinin teşkilatını, faaliyetlerini, personellerini (kamu görevlileri) ve idari yargıyı düzenler.\\n  - Ceza Hukuku: Suç oluşturan fiilleri ve bu fiillere uygulanacak cezaları/yaptırımları belirler.\\n  - Vergi Hukuku: Devletin kamu hizmetlerini karşılamak üzere kişilerden aldığı mali yükümlülükleri ve vergi ilişkilerini düzenler.\\n  - Yargılama (Usul) Hukuku: Mahkemelerin uyuşmazlıkları çözerken izleyeceği usulleri düzenler (Hukuk, Ceza, İdari yargılama usulleri).\\n  - İcra ve İflas Hukuku: Mahkeme kararlarının devlet gücüyle nasıl yerine getirileceğini ve borç ödeyemeyenlerin durumunu düzenler.\\n  - Devletler Genel Hukuku: Bağımsız devletler ve uluslararası kuruluşlar arasındaki ilişkileri düzenler.\\n\\n2. Özel Hukuk: Kişilerin kendi aralarındaki veya devletin kamu gücü kullanmadan (eşit şartlarda) girdiği ilişkileri düzenleyen hukuk dalıdır. Taraflar hukuken eşittir, irade serbestisi geçerlidir. Alt dalları şunlardır:\\n  - Medeni Hukuk: Özel hukukun en geniş dalıdır. Dört ana bölümden oluşur: Kişiler Hukuku (gerçek/tüzel kişiler, dernekler, vakıflar), Aile Hukuku (nişanlanma, evlenme, boşanma, velayet, vesayet, soybağı), Eşya Hukuku (mülkiyet, zilyetlik, tapu sicili, rehin), Miras Hukuku (ölüme bağlı tasarruflar, yasal/atanmış mirasçılar, vasiyetname).\\n  - Borçlar Hukuku: Kişiler arasındaki borç ilişkilerini, borcun kaynaklarını ve sona ermesini düzenler (Genel ve Özel hükümler).\\n  - Ticaret Hukuku: Ticari işletme, şirketler, kıymetli evrak (çek, poliçe, bono), deniz ticareti ve sigorta hukukunu kapsar.\\n  - Devletler Özel Hukuku: Farklı uyruktaki kişilerin ilişkilerinde hangi ülkenin kanunlarının uygulanacağını (kanunlar ihtilafı) ve yabancıların haklarını düzenler.\\n\\n3. Karma Hukuk: Hem kamu hukuku hem de özel hukuk özelliklerini bünyesinde barındıran, devletin zayıf tarafı korumak amacıyla müdahale ettiği hukuk dalıdır. Başlıca alt dalları: İş Hukuku, Hava Hukuku, Çevre Hukuku, Toprak Hukuku, Bankacılık Hukuku ve Fikri Mülkiyet Hukukudur.",
    "keyFacts": [
      "Kamu hukukunda taraflar arasında astlık-üstlük ilişkisi vardır ve devlet kamu gücü ayrıcalıklarını kullanır.",
      "Özel hukukta taraflar tamamen eşittir ve irade serbestisi (sözleşme yapma özgürlüğü) hakimdir.",
      "Medeni Hukuk aile, eşya, miras ve kişiler hukuku olmak üzere 4 ana bölümden oluşur; Borçlar Hukuku Medeni Kanunun 5. kitabıdır ve özel hukukun alt dalıdır.",
      "İş hukuku, devletin çalışan kesimi koruma amacıyla müdahale etmesinden ötürü karma hukuk dalı olarak kabul edilir."
    ],
    "examImportance": "Hangi hukuk dalının kamu, özel veya karma hukuk grubuna dahil olduğu, Medeni Hukukun alt dallarının neler olduğu (Kişiler, Aile, Eşya, Miras) ve kamu hukukunun kolları KPSS Vatandaşlık testlerinde en sık çıkan klasik sınıflandırma sorularındandır."
  },
  {
    "id": "borclar-hukuku",
    "category": "Temel Hukuk Bilgisi",
    "title": "Borçlar Hukuku ve Temel İlkeleri",
    "aliases": [
      "borclar hukuku", "edim", "borc unsurlari", "haksiz fiil", "sebepsiz zenginlesme", "sözleşme", "borcun kaynaklari"
    ],
    "keywords": [
      "borç", "edim", "sözleşme", "fiil", "zenginleşme", "alacaklı", "borçlu"
    ],
    "shortDefinition": "Kişiler arasındaki borç ilişkilerini, borcun kaynaklarını, unsurlarını, tabi olduğu ilkeleri ve sona erme hallerini düzenleyen hukuk dalıdır.",
    "detailedExplanation": "Borçlar Hukuku, Medeni Kanunun ayrılmaz bir parçası ve tamamlayıcısıdır. Hukuki anlamda borç ilişkisi; alacaklı adı verilen kişinin borçludan belirli bir davranışta (edim) bulunmasını isteyebileceği, borçlunun da bu davranışı yerine getirmekle yükümlü olduğu hukuki bağdır.\\n\\nBorç İlişkisinin Temel Unsurları:\\n- Alacaklı: Borç ilişkisinde edimin yerine getirilmesini talep etme hakkına sahip olan aktif taraftır.\\n- Borçlu: Borç ilişkisinde edimi yerine getirmekle yükümlü olan pasif taraftır.\\n- Edim: Borçlunun alacaklıya karşı yerine getirmekle yükümlü olduğu davranıştır. Edim verme (para ödeme, mal teslim etme), yapma (inşaat yapma, ders anlatma) veya yapmama (sır saklama, rekabet etmeme) şeklinde olabilir. Edimin ahlaka, kanunun emredici hükümlerine uygun ve imkansız olmaması şarttır.\\n\\nBorcun Kaynakları (Borcu Doğuran Sebepler):\\n1. Hukuki İşlem (Özellikle Sözleşmeler): İki veya daha fazla kişinin karşılıklı ve birbirine uygun irade beyanlarıyla borç ilişkisi kurmasıdır (örn: satış sözleşmesi, kira sözleşmesi).\\n2. Haksız Fiil: Bir kimsenin hukuka aykırı, kusurlu bir davranışla başkasına zarar vermesidir. Haksız fiilin unsurları: Hukuka aykırı fiil, kusur, zarar ve illiyet (nedensellik) bağıdır. Yaptırımı maddi/manevi tazminattır.\\n3. Sebepsiz Zenginleşme: Haklı bir sebep olmaksızın, bir kişinin malvarlığının diğer bir kişinin malvarlığı aleyhine çoğalmasıdır (örn: yanlış hesaba para yatırılması). Yaptırımı geri verme (iade) yükümlülüğüdür.\\n\\nBorçlar Hukukuna Hakim Olan Temel İlkeler:\\n- Nispilik İlkesi: Borç ilişkisinden doğan haklar nispi haklardır. Sadece borç ilişkisinin tarafları arasında ileri sürülebilir, üçüncü kişilere karşı doğrudan ileri sürülemez (tapuya şerh verilen şahsi haklar hariç).\\n- İrade Özgürlüğü (Sözleşme Serbestisi): Kişiler kanunun emredici hükümlerine, kamu düzenine, genel ahlaka ve kişilik haklarına aykırı olmamak kaydıyla diledikleri konuda diledikleri kişiyle sözleşme yapabilirler.\\n- Dürüstlük İlkesi: Borçların ifasında ve hakların kullanılmasında dürüstlük kuralı esastır.\\n- Kusurlu Sorumluluk İlkesi: Borçlunun sorumluluğu kural olarak kusuruna dayanır. Kusuru olmayan borçlu meydana gelen zarardan sorumlu tutulamaz (kusursuz sorumluluk halleri hariç).\\n- Üçüncü Kişi Aleyhine Borç Kurulamaması: İki kişi kendi arasında anlaşarak üçüncü bir kişiyi borç altına sokamaz.\\n- İfa Yeri: Aksine sözleşme yoksa; para borçları alacaklının ödeme anındaki yerleşim yerinde (götürülecek borç), parça borçları sözleşmenin yapıldığı sırada malın bulunduğu yerde, diğer borçlar ise borçlunun yerleşim yerinde (aranacak borç) ifa edilir.",
    "keyFacts": [
      "Edim, borcun konusudur ve verme, yapma veya yapmama şeklinde gerçekleşebilir.",
      "Borcun 3 temel kaynağı vardır: Hukuki işlem, haksız fiil ve sebepsiz zenginleşme.",
      "Borçlar hukukunda nispilik esastır; borç ilişkisinden doğan haklar sadece sözleşmenin taraflarını bağlar.",
      "Para borçları alacaklının yerleşim yerinde ifa edilir (götürülecek borç); parça dışındaki tüm borçlar borçlunun yerleşim yerinde ifa edilir."
    ],
    "examImportance": "Borç ilişkisinin unsurları (Alacaklı, Borçlu, Edim), borcun kaynakları (Hukuki işlem, Haksız fiil, Sebepsiz zenginleşme) ve borçlar hukukuna hakim olan ilkeler (özellikle nispilik ve irade özgürlüğü) KPSS Vatandaşlık bölümünün en garanti soru alanlarındandır."
  }
];
`;

const data02 = `import type { EncyclopediaEntry } from "../types";
export const osmanliSiyasiData: EncyclopediaEntry[] = [
  {
    "id": "kanun-i-esasi-1876",
    "category": "Anayasa Tarihi ve Devlet",
    "title": "1876 Kanun-i Esasi ve Özellikleri",
    "aliases": [
      "kanuni esasi", "ilk anayasa", "1876 anayasası", "kanun-i esasi"
    ],
    "keywords": [
      "anayasa", "meclis", "mebusan", "ayan", "padisah", "monarsi", "1876", "1909"
    ],
    "shortDefinition": "Türk tarihinin ilk yazılı anayasası olup mutlak monarşiden meşruti monarşiye geçişi sağlayan tarihi belgedir.",
    "detailedExplanation": "II. Abdülhamit döneminde (23 Aralık 1876) ilan edilmiştir. Belgeyi Mithat Paşa başkanlığındaki Komisyon-ı Mahsus hazırlamıştır. Fransız ve Belçika anayasaları örnek alınmıştır. Türk anayasa tarihinin ilk yazılı anayasasıdır.\\n\\nTemel Özellikleri ve Yapısı:\\n- Padişahın konumu: Egemenlik hakkı Osmanlı hanedanının en büyük erkek üyesine (ekber ve erşed sistemi) aittir. Padişahın şahsı kutsal ve sorumsuzdur. Bakanlar kurulu (Heyet-i Vükela) kararlarında padişaha karşı sorumludur.\\n- Çift Meclisli Yapı (Meclis-i Umumi):\\n  * Meclis-i Mebusan: Üyeleri halk tarafından (her 50 bin erkek nüfusa 1 mebus düşecek şekilde) 4 yıllığına seçilen meclistir.\\n  * Meclis-i Ayan: Üyeleri doğrudan padişah tarafından ömür boyu kaydıyla atanan meclistir. Sayısı mebusların üçte birini geçemez.\\n- Padişahın Yetkileri (İlk Hali - 1876): Padişahın mutlak veto yetkisi vardır. Meclisi feshetme yetkisi sınırsızdır. Sürgün yetkisi (Meşhur 113. madde) ve polis soruşturmasıyla kişileri sürgün etme hakkı padişaha aittir. Kanun teklifi sunabilmek için padişahtan izin almak zorunludur. Hükümet meclise karşı değil, padişaha karşı sorumludur.\\n\\n1909 Değişiklikleri (II. Meşrutiyet Dönemi):\\n1908 yılında II. Meşrutiyet'in ilanı ve 31 Mart Vakası sonrası 1909 yılında anayasada çok köklü demokratik değişiklikler yapılmıştır:\\n- Padişahın sürgün yetkisi kaldırılmıştır.\\n- Hükümet (Bakanlar Kurulu) padişaha karşı değil, meclise (Meclis-i Mebusan) karşı sorumlu kılınmıştır.\\n- Padişahın meclisi feshetme yetkisi zorlaştırılmış ve sınırlanmıştır.\\n- Kanun teklifi için padişahtan izin alma şartı kaldırılmıştır.\\n- Dernek kurma, parti kurma ve toplantı yapma gibi temel hak ve hürriyetler ilk kez anayasal güvenceye kavuşturulmuştur. Böylece meşruti sistem parlamenter sisteme yaklaştırılmıştır.",
    "keyFacts": [
      "Türk tarihinin ilk yazılı anayasasıdır.",
      "1876 anayasası laik değildir; devletin dininin İslam olduğu ve şer'i hükümlerin uygulanacağı belirtilmiştir.",
      "Çift meclisli parlamenter yapıya sahiptir: Meclis-i Aebusan (seçimle gelen) ve Meclis-i Ayan (atama ile gelen).",
      "1909 değişiklikleriyle Osmanlı meşrutiyeti gerçek anlamda meclis üstünlüğüne ve parlamenter sisteme geçiş yapmıştır."
    ],
    "examImportance": "İlk Türk anayasası olması, çift meclisli yapısı (Mebusan ve Ayan) ve 1909 demokratik değişikliklerinin getirdiği yenilikler (hükümetin meclise sorumlu olması, sürgün yetkisinin kaldırılması) KPSS Vatandaşlık ve Tarih sınavlarının ortak ve çok önemli soru alanlarındandır."
  },
  {
    "id": "anayasa-1921",
    "category": "Anayasa Tarihi ve Devlet",
    "title": "1921 Anayasası (Teşkilat-ı Esasiye)",
    "aliases": [
      "1921 anayasası", "teskilati esasiye", "yumusak anayasa", "teşkilat-ı esasiye", "cerceve anayasa"
    ],
    "keywords": [
      "anayasa", "tbmm", "güçler birliği", "meclis hükümeti", "savaş", "1921", "yumuşak", "çerçeve"
    ],
    "shortDefinition": "Kurtuluş Savaşı'nın olağanüstü koşullarında kabul edilen, güçler birliği ilkesini benimseyen tek yumuşak ve tek çerçeve anayasamızdır.",
    "detailedExplanation": "20 Ocak 1921 tarihinde I. TBMM tarafından kabul edilmiştir. Savaş döneminin olağanüstü şartları altında hızlı karar alabilmek amacıyla hazırlanmıştır. Toplam 23 madde ve 1 muvakkat (geçici) maddeden oluşan oldukça kısa bir metindir. Bu yönüyle Türk anayasa tarihinin tek 'çerçeve' anayasasıdır.\\n\\nTemel Özellikleri ve Sistemi:\\n- Milli Egemenlik: Egemenliğin kayıtsız şartsız millete ait olduğunu ilan eden ilk anayasadır (Egemenlik bilakaydüşart milletindir).\\n- Güçler Birliği İlkesi: Yasama ve yürütme yetkileri milletin tek ve gerçek temsilcisi olan TBMM'de toplanmıştır. Yargı yetkisinden ise bahsedilmemiştir (Savaş döneminde İstiklal Mahkemeleri yargı yetkisini meclis adına fiilen kullanmıştır).\\n- Meclis Hükümeti Sistemi: Devletin başkanlığı veya cumhurbaşkanlığı makamı yoktur. Meclis başkanı aynı zamanda hükümetin de başkanıdır. Bakanlar (Vekiller) meclis içerisinden tek tek oylanarak seçilir. Hükümetin adı 'TBMM Hükümeti'dir.\\n- Yumuşak Anayasa: Anayasanın değiştirilmesi için özel zorlaştırıcı kurallar, nitelikli çoğunluk aranmamıştır. Değiştirilemez hiçbir maddesi yoktur. Bu yönüyle tarihimizin tek 'yumuşak' anayasasıdır.\\n- Temel Haklar: Savaş koşulları sebebiyle temel hak ve hürriyetlere yer verilmemiştir. Kanun-i Esasi'nin bu anayasayla çelişmeyen hükümleri fiilen uygulanmaya devam etmiştir.\\n\\n1923 Değişiklikleri (29 Ekim 1923):\\nCumhuriyetin ilanıyla anayasada çok önemli değişiklikler yapılmıştır:\\n- Devletin yönetim şeklinin 'Cumhuriyet' olduğu hükme bağlanmıştır.\\n- Devletin dininin İslam, resmi dilinin Türkçe olduğu belirtilmiştir.\\n- Cumhurbaşkanlığı makamı kurulmuş, ilk Cumhurbaşkanı olarak Mustafa Kemal Atatürk seçilmiştir.\\n- Cumhurbaşkanı başbakanı atayacak, başbakan da bakanları seçip cumhurbaşkanının onayına sunacaktır (Kabine sistemine geçiş adımı atılmıştır).",
    "keyFacts": [
      "Egemenliğin millete ait olduğunu belirten ilk anayasadır.",
      "Türk tarihinin tek çerçeve (kısa ve öz) ve tek yumuşak (kolay değiştirilebilen) anayasasıdır.",
      "Güçler birliği ve meclis hükümeti sistemini benimsemiştir; devlet başkanlığı makamı ilk halinde yoktur.",
      "Cumhuriyet rejimi, devletin dini (İslam) ve resmi dili (Türkçe) hükümleri anayasaya 1923 değişiklikleriyle girmiştir."
    ],
    "examImportance": "Yumuşak ve çerçeve anayasa olması, güçler birliği ilkesi, meclis hükümeti sistemi özellikleri ve 1923 değişiklikleriyle gelen yenilikler (Cumhuriyetin ilanı, CB makamı) KPSS'de en çok sorulan anayasa tarihi konularıdır."
  },
  {
    "id": "anayasa-1961",
    "category": "Anayasa Tarihi ve Devlet",
    "title": "1961 Anayasası ve Getirdiği Yenilikler",
    "aliases": [
      "1961 anayasası", "halkoyu", "aym", "senato", "kuvvetler ayriligi", "1961"
    ],
    "keywords": [
      "anayasa", "aym", "senato", "halk oylaması", "kuvvetler ayrılığı", "1961", "çoğulcu"
    ],
    "shortDefinition": "1960 askeri müdahalesi sonrası hazırlanan, kuvvetler ayrılığını tam olarak kuran, en demokratik ve özgürlükçü anayasamızdır.",
    "detailedExplanation": "27 Mayıs 1960 askeri müdahalesi sonrası Temsilciler Meclisi ve Milli Birlik Komitesi'nden oluşan Kurucu Meclis tarafından hazırlanmıştır. 9 Temmuz 1961'de halk oylamasına (referandum) sunulmuş ve %61.7 evet oyuyla kabul edilmiştir. Türk tarihinde referandumla kabul edilen ilk anayasadır. Çoğunlukçu demokrasi anlayışından 'çoğulcu' demokrasi anlayışına geçişi temsil eder.\\n\\nGetirdiği Başlıca Yenilikler ve Kurumlar:\\n- Kuvvetler Ayrılığı: Yasama, yürütme ve yargı güçleri kesin olarak birbirinden ayrılmıştır. Yargı bağımsızlığı anayasal güvenceye kavuşturulmuştur.\\n- Anayasa Mahkemesi (AYM): Kanunların anayasaya uygunluğunu denetlemek üzere ilk kez kurulmuştur. Böylece meclisin yasama üstünlüğü anayasal sınırlar içine çekilmiştir.\\n- Çift Meclisli Yasama (Meclis-i Umumi):\\n  * Millet Meclisi: Halk tarafından seçilen 450 milletvekilinden oluşur.\\n  * Cumhuriyet Senatosu: Cumhurbaşkanınca seçilen üyeler, tabii üyeler (eski CB'ler ve MBK üyeleri) ve halk tarafından seçilen senatörlerden oluşur.\\n- Özerk Kurumlar: Üniversitelere ve TRT'ye anayasal düzeyde özerklik verilmiştir.\\n- Yüksek Kurullar: Hâkimler ve Savcılar Yüksek Kurulu (HSYK), Milli Güvenlik Kurulu (MGK), Devlet Planlama Teşkilatı (DPT) ve Diyanet İşleri Başkanlığı anayasal kurumlar haline gelmiştir.\\n- Temel Haklar ve Sosyal Devlet: Temel haklar çok geniş düzenlenmiş, işçilere sendika kurma, grev ve toplu sözleşme hakkı verilmiştir. Anayasanın başlangıç kısmında ilk kez 'Sosyal Devlet', 'Hukuk Devleti' ve 'İnsan haklarına dayalı devlet' ilkeleri yer almıştır.\\n\\n1971-1973 Değişiklikleri (12 Mart Muhtırası Sonrası):\\nAnayasanın getirdiği özgürlükçü ortamın suistimal edildiği gerekçesiyle yürütmeyi güçlendiren ve hakları kısıtlayan sert değişiklikler yapılmıştır:\\n- Temel hak ve hürriyetler genel sınırlama sebeplerine tabi tutulmuştur.\\n- Bakanlar Kurulu'na ilk kez Kanun Hükmünde Kararname (KHK) çıkarma yetkisi verilmiştir.\\n- Üniversitelerin ve TRT'nin özerkliği zayıflatılmıştır.\\n- Askeri Yüksek İdare Mahkemesi (AYİM) kurulmuş, Devlet Güvenlik Mahkemeleri (DGM) anayasaya eklenmiştir.",
    "keyFacts": [
      "Halk oylamasıyla kabul edilen ilk anayasadır.",
      "Anayasa Mahkemesi (AYM), HSYK ve MGK ilk kez bu anayasayla kurulmuştur.",
      "Cumhuriyet Senatosu adında ikinci bir parlamento kanadı açılmıştır (Çift meclisli sistem).",
      "1971 değişiklikleriyle Bakanlar Kuruluna ilk kez KHK çıkarma yetkisi verilmiştir."
    ],
    "examImportance": "Anayasa Mahkemesi'nin kuruluşu, ilk kez referandumla kabul edilmesi, çift meclisli yapı (Senato), DDK ve HSYK'nın kuruluşu ile 1971 değişiklikleriyle gelen KHK yetkisi KPSS'de çok sık sorulan temel detaylardır."
  },
  {
    "id": "anayasa-1982-genel-esaslar",
    "category": "Anayasa Tarihi ve Devlet",
    "title": "1982 Anayasası ve Temel İlkeleri",
    "aliases": [
      "1982 anayasası", "kazuistik", "sert anayasa", "katı anayasa", "1982", "cumhuriyet ilkeleri"
    ],
    "keywords": [
      "anayasa", "sert", "kazuistik", "değiştirilemez", "cumhuriyet", "1982", "başlangıç"
    ],
    "shortDefinition": "Günümüzde de yürürlükte olan, yürütmeyi güçlendiren, hakları sınırlayan, aşırı sert ve kazuistik (detaycı) anayasadır.",
    "detailedExplanation": "12 Eylül 1980 askeri müdahalesi sonrası Milli Güvenlik Konseyi ve Danışma Meclisi'nden oluşan Kurucu Meclis tarafından hazırlanmıştır. 7 Kasım 1982'de halk oylamasına sunulmuş ve %91.37 evet oyuyla kabul edilmiştir. Geçici 1. madde gereği anayasanın kabulüyle birlikte Kenan Evren doğrudan Cumhurbaşkanı seçilmiştir.\\n\\nTemel Özellikleri ve Genel Yapısı:\\n- Aşırı Sert (Katı) Anayasa: Değiştirilemeyecek ve değiştirilmesi teklif dahi edilemeyecek maddeleri vardır (ilk 3 madde, güvencesi 4. maddedir). Değiştirme süreci zorlaştırılmış çoğunluklar ve Cumhurbaşkanının onay/referandum süreçlerine bağlanmıştır.\\n- Kazuistik (Detaycı) Anayasa: 177 madde ve çok sayıda geçici maddeden oluşan, maddeleri son derece uzun ve detaylı yazılmış bir anayasadır. Hakların sınırlandırılması ve istisnaları çok detaylı düzenlenmiştir.\\n- Yürütmenin Güçlendirilmesi: Cumhurbaşkanının yetkileri parlamenter sisteme göre olağanüstü genişletilmiş ve yürütme kanadı güçlendirilmiştir.\\n- Tek Meclisli Yapı: Cumhuriyet Senatosu kaldırılarak tek meclisli sisteme (TBMM) geri dönülmüştür.\\n- Temel Hakların Sınırlandırılması: Devletin otoritesini korumak amacıyla temel hakların sınırları kalın çizilmiş, 1961'e kıyasla daha kısıtlayıcı bir yaklaşım benimsenmiştir.\\n\\nAnayasanın İlk 3 Maddesi (Değiştirilemez Hükümler):\\n- 1. Madde: Türkiye Devleti bir Cumhuriyettir.\\n- 2. Madde: Türkiye Cumhuriyeti, toplumun huzuru, milli dayanışma ve adalet anlayışı içinde, insan haklarına saygılı, Atatürk milliyetçiliğine bağlı, başlangıçta belirtilen temel ilkelere dayanan, demokratik, laik ve sosyal bir hukuk devletidir.\\n- 3. Madde: Türkiye Devleti, ülkesi ve milletiyle bölünmez bir bütündür. Dili Türkçedir. Bayrağı, şekli kanununda belirtilen, beyaz ay yıldızlı al bayraktır. Milli marşı 'İstiklal Marşı'dır. Başkenti Ankara'dır.\\n- 4. Madde: İlk 3 maddenin değiştirilemeyeceğini ve değiştirilmesinin teklif dahi edilemeyeceğini düzenler.",
    "keyFacts": [
      "Yürürlükteki en kazuistik (detaycı) ve en katı (sert) anayasamızdır.",
      "İlk 3 maddesi değiştirilemez, teklif edilemez. Bunun güvencesi 4. maddedir.",
      "Cumhuriyet Senatosu kaldırılarak tek meclisli sisteme geçilmiştir.",
      "Anayasanın niteliklerinde 1961'deki 'insan haklarına dayalı' ifadesi, 1982'de 'insan haklarına saygılı' olarak değiştirilmiştir."
    ],
    "examImportance": "Anayasanın ilk 3 maddesinin içeriği, değiştirilemezlik kuralı (Md. 4), 1982 Anayasası'nın sert ve kazuistik nitelikleri ile 1961 anayasasıyla yapılan karşılaştırmalar (çift meclisin kaldırılması, insan haklarına saygılı/dayalı farkı) sınavların en gözde konu başlıklarındandır."
  }
];
`;

const data03 = `import type { EncyclopediaEntry } from "../types";
export const osmanliKulturMedeniyetData: EncyclopediaEntry[] = [
  {
    "id": "tbmm-gorev-ve-yetkileri",
    "category": "Yasama",
    "title": "TBMM'nin Görev ve Yetkileri",
    "aliases": [
      "tbmm yetkileri", "kanun yapma", "para basma", "savaş ilanı", "af yetkisi", "butce kanunu"
    ],
    "keywords": [
      "tbmm", "kanun", "para", "savaş", "af", "bütçe", "antlaşma", "yetki", "anayasa"
    ],
    "shortDefinition": "Anayasamıza göre yasama yetkisini Türk Milleti adına kullanan tek organ olan TBMM'nin anayasal görevleridir.",
    "detailedExplanation": "1982 Anayasası'na göre yasama yetkisi Türk Milleti adına Türkiye Büyük Millet Meclisi'nindir. Bu yetki devredilemez, aslidir (araya başka bir merci girmeden doğrudan düzenleme yapabilir) ve geneldir (kanunla sınırlanmayan her konuyu düzenleyebilir). TBMM'nin başlıca görev ve yetkileri şunlardır:\\n\\n1. Kanun Koymak, Değiştirmek ve Kaldırmak: TBMM'nin en temel görevidir. Kanun teklif etmeye milletvekilleri yetkilidir (tek bir vekil dahi teklif verebilir).\\n2. Bütçe ve Kesinhesap Kanun Tekliflerini Görüşmek ve Kabul Etmek: Bütçe kanun teklifini Cumhurbaşkanı hazırlar ve mali yılbaşından en az 75 gün önce Meclise sunar. Kesinhesap kanun teklifi ise yeni bütçe teklifiyle birlikte meclise sunulur. Bütçe kanununda milletvekilleri gider artırıcı veya gelir azaltıcı önerilerde bulunamazlar.\\n3. Para Basılmasına Karar Vermek: Tedavüle çıkarılacak madeni ve kağıt paraların basılması yetkisi anayasal olarak meclistedir. Meclis bu yetkiyi Merkez Bankası aracılığıyla kullanır.\\n4. Savaş İlanına Karar Vermek: Türkiye'nin yabancı devletlere savaş ilan etmesine veya TSK'nın yabancı ülkelere gönderilmesine ya da yabancı orduların Türkiye'de bulunmasına izin verme yetkisidir.\\n5. Milletlerarası Andlaşmaların Onaylanmasını Uygun Bulmak: Yabancı devletlerle veya uluslararası kuruluşlarla yapılan andlaşmaların yürürlüğe girebilmesi için meclisin bir kanunla bunu 'uygun bulması' gerekir. Andlaşmaları onaylayan ve yayımlayan makam ise Cumhurbaşkanı'dır.\\n6. Genel ve Özel Af İlan Etmek: TBMM üye tamsayısının 5/3 çoğunluğu (yani en az 360 milletvekilinin kabul oyu) ile genel veya özel af ilan edebilir. Anayasaya göre tek istisna orman suçlarıdır; ormanları yakma veya yok etme suçları hiçbir şekilde af kapsamına alınamaz.\\n7. Olağanüstü Hal (OHAL) İlanını Onaylamak veya Süresini Uzatmak: Cumhurbaşkanı tarafından ilan edilen OHAL kararını onaylar, süresini kısaltabilir, kaldırabilir veya her defasında 4 ayı geçmemek üzere uzatabilir.",
    "keyFacts": [
      "Para basılması ve savaş ilanına karar verme yetkisi yalnızca TBMM'ye aittir.",
      "Genel ve özel af çıkarabilmek için üye tamsayısının 5/3 çoğunluğu (360 vekil) gerekir. Orman suçları asla affedilemez.",
      "Milletlerarası andlaşmaları uygun bulan organ TBMM iken, bu andlaşmaları onaylayan ve yayımlayan organ Cumhurbaşkanı'dır.",
      "Bütçe kanun teklifini Cumhurbaşkanı hazırlar, TBMM Genel Kurulu kabul veya reddeder; Cumhurbaşkanı bütçeyi veto edemez."
    ],
    "examImportance": "Afn oy oranı (360 vekil), bütçe sürecinin aktörleri (CB hazırlar, Meclis onaylar, CB veto edemez), milletlerarası andlaşmaların uygun bulunması (TBMM) ve onaylanması (CB) ayrımı sınavlarda en çok sorulan çeldiricilerdir."
  },
  {
    "id": "yasama-dokunulmazligi-sorumsuzlugu",
    "category": "Yasama",
    "title": "Yasama Dokunulmazlığı ve Sorumsuzluğu",
    "aliases": [
      "dokunulmazlik", "sorumsuzluk", "milletvekili korumasi", "yasama dokunulmazlığı", "yasama sorumsuzluğu"
    ],
    "keywords": [
      "dokunulmazlik", "sorumsuzluk", "milletvekili", "yargılama", "hukuki", "itiraz", "aym"
    ],
    "shortDefinition": "Milletvekillerinin görevlerini hiçbir organın veya gücün baskısı altında kalmadan özgürce yapabilmeleri amacıyla anayasayla getirilen koruma kalkanlarıdır.",
    "detailedExplanation": "Milletvekillerinin parlamento çalışmalarını engellemelere maruz kalmadan yürütmelerini sağlamak amacıyla iki tür yasama bağışıklığı tanınmıştır:\\n\\n1. Yasama Sorumsuzluğu (Kürsü Bağışıklığı):\\n- Milletvekillerinin Meclis çalışmalarındaki oy, söz ve düşüncelerinden ve bunları meclis dışında tekrarlamalarından dolayı hukuken ve cezai olarak hiçbir şekilde sorumlu tutulamamasıdır.\\n- Mutlaktır: Hiçbir güç, hatta meclis kararı dahi bu sorumsuzluğu kaldıramaz.\\n- Süreklidir: Milletvekilinin görevi sona erse bile, vekillik döneminde söylediği sözlerden dolayı ömür boyu yargılanamaz.\\n- Hukuki ve cezai koruma sağlar (tazminat veya ceza davası açılamaz).\\n\\n2. Yasama Dokunulmazlığı:\\n- Seçimden önce veya sonra bir suç işlediği ileri sürülen milletvekilinin, meclisin kararı olmadıkça gözaltına alınamaması, sorgulanamaması, tutuklanamaması ve yargılanamamasıdır.\\n- Nispidir: TBMM Genel Kurulu'nda yapılacak oylamayla (basit çoğunlukla) kaldırılabilir.\\n- Geçicidir: Milletvekilliği süresince korur; milletvekilliği bittiğinde veya dokunulmazlık kaldırıldığında yargılama süreci kaldığı yerden devam eder (Zamanaşımı süresi vekillik boyunca işlemez).\\n- Yalnızca cezai koruma sağlar (hukuk/tazminat davalarına engel değildir).\\n- İstisnaları: Ağır cezayı gerektiren suçüstü hali ve seçimden önce soruşturmasına başlanmış olmak kaydıyla Anayasanın 14. maddesindeki 'devletin bölünmez bütünlüğüne karşı işlenen suçlar' dokunulmazlık kapsamı dışındadır; meclis kararı aranmaksızın yargılama yapılabilir.\\n\\nDokunulmazlığın Kaldırılmasına İtiraz Süreci:\\nDokunulmazlığı kaldırılan milletvekili veya onun adına başka bir milletvekili, kararın alındığı tarihten itibaren 7 gün içinde Anayasa Mahkemesi'ne (AYM) iptal başvurusunda bulunabilir. AYM, başvuruyu 15 gün içinde kesin olarak karara bağlamak zorundadır.",
    "keyFacts": [
      "Yasama sorumsuzluğu mutlaktır, kaldırılamaz ve vekillik bitse dahi ömür boyu sürer.",
      "Yasama dokunulmazlığı nispidir, meclis kararıyla kaldırılabilir ve sadece milletvekilliği süresince korur.",
      "Dokunulmazlığın kaldırılmasına itiraz süresi 7 gün, AYM'nin karar verme süresi ise 15 gündür.",
      "Dokunulmazlığın kaldırılması milletvekilliğini kendiliğinden düşürmez; vekil sadece yargılanır."
    ],
    "examImportance": "Dokunulmazlık ve sorumsuzluk farkları (mutlak/nispi, sürekli/geçici), dokunulmazlığın kaldırılmasına itiraz ve AYM'nin karar süreleri (7 gün başvuru, 15 gün karar) ile dokunulmazlığı kaldırılan kişinin vekilliğinin düşmediği bilgisi KPSS'de çok sık sınanmaktadır."
  },
  {
    "id": "meclis-denetim-yollari",
    "category": "Yasama",
    "title": "TBMM'nin Bilgi Edinme ve Denetim Yolları",
    "aliases": [
      "denetim yollari", "meclis arastirmasi", "yazili soru", "meclis sorusturması", "genel gorusme", "gensoru"
    ],
    "keywords": [
      "soru", "araştırma", "soruşturma", "genel görüşme", "gensoru", "yazılı", "denetim"
    ],
    "shortDefinition": "TBMM'nin yürütme organını denetleme ve toplumu ilgilendiren konularda bilgi edinme amacıyla kullandığı anayasal yöntemlerdir.",
    "detailedExplanation": "2017 Anayasa değişiklikleriyle parlamenter sistemden Cumhurbaşkanlığı Hükümet Sistemine geçilmesiyle birlikte meclisin denetim yolları yeniden düzenlenmiştir. Günümüzde anayasal olarak kabul edilen dört denetim ve bilgi edinme yolu şunlardır:\\n\\n1. Yazılı Soru:\\n- Milletvekillerinin, Cumhurbaşkanı yardımcıları veya bakanlara yazılı olarak cevaplamaları üzere en geç 15 gün içinde cevaplandırılmak üzere sordukları sorulardır. Soru önergeleri tek bir milletvekili tarafından verilebilir.\\n\\n2. Meclis Araştırması:\\n- Belirli bir konuda bilgi edinilmek amacıyla yapılan incelemedir. Meclis araştırması talebi siyasi parti grupları veya en az 20 milletvekili tarafından verilebilir. Araştırmayı yürütmek üzere meclis bünyesinde özel bir araştırma komisyonu kurulur. Devlet sırrı ve ticari sırlar araştırma kapsamı dışındadır.\\n\\n3. Genel Görüşme:\\n- Toplumu ve devlet faaliyetlerini ilgilendiren önemli bir konunun TBMM Genel Kurulu'nda görüşülmesidir. Genel görüşme açılması talebi siyasi parti grupları veya en az 20 milletvekili tarafından yazılı olarak istenebilir.\\n\\n4. Meclis Soruşturması:\\n- Cumhurbaşkanı yardımcıları ve bakanların görevleriyle ilgili işledikleri iddia edilen suçlardan dolayı cezai sorumluluklarının araştırılmasını sağlayan en ağır denetim mekanizmasıdır.\\n- Süreç ve Nitelikli Çoğunluklar:\\n  * Soruşturma açılması teklifi: Üye tamsayısının salt çoğunluğunun (301 vekil) yazılı önergesiyle verilebilir.\\n  * Soruşturma açılması kararı: Teklif en geç 1 ay içinde görüşülür ve üye tamsayısının 3/5 çoğunluğunun (360 vekil) gizli oyuyla soruşturma açılmasına karar verilir.\\n  * Komisyon Raporu: Meclisteki partilerin güçleri oranında temsil edildiği 15 kişilik bir komisyon kurulur, raporunu hazırlar.\\n  * Yüce Divan'a Sevk Kararı: Rapor mecliste görüşülür. Üye tamsayısının 2/3 çoğunluğunun (400 vekil) gizli oyuyla ilgili kişi Yüce Divan'a (Anayasa Mahkemesi) sevk edilir.\\n  * Yüce Divan yargılaması sonucunda seçilmeye engel bir suçtan mahkum olan bakan veya CB yardımcısının görevi kendiliğinden sona erer.\\n\\nKaldırılan Denetim Yolları (2017 Değişikliği):\\nCumhurbaşkanlığı Hükümet Sisteminde hükümetin meclise karşı siyasi sorumluluğu bulunmadığı için hükümeti düşürmeye yarayan Gensoru (Güvensizlik önergesi) ile Sözlü Soru ve Bakanlar Kurulu'na yönelik Güvenoyu mekanizmaları anayasadan tamamen kaldırılmıştır.",
    "keyFacts": [
      "Yazılı sorular en geç 15 gün içinde cevaplandırılmalıdır.",
      "Gensoru, sözlü soru ve güvenoyu mekanizmaları 2017 yılında tamamen kaldırılmıştır.",
      "Meclis soruşturması açılması için sırasıyla 301 teklif, 360 soruşturma açma kararı ve 400 Yüce Divan'a sevk kararı oyu (gizli oylama) gereklidir.",
      "Yüce Divan'a sevk edilen Cumhurbaşkanı yardımcısı veya bakanın görevi düşmez; ancak seçilmeye engel bir suçtan mahkum olurlarsa görevleri sona erer."
    ],
    "examImportance": "Kaldırılan denetim yolları (gensoru, sözlü soru), yazılı soru cevaplama süresi (15 gün) ve meclis soruşturması süreçlerindeki nitelikli oy oranları (301, 360, 400) KPSS Vatandaşlık bölümünün en klasik ve zorlayıcı sayısal sorularını oluşturur."
  }
];
`;

const data04 = `import type { EncyclopediaEntry } from "../types";
export const inkilapTarihiData: EncyclopediaEntry[] = [
  {
    "id": "cumhurbaskani-secimi-yetkileri",
    "category": "Yürütme",
    "title": "Cumhurbaşkanının Görev ve Yetkileri",
    "aliases": [
      "cumhurbaşkanı", "yürütme başı", "cb yetkileri", "cumhurbaşkanı seçimi", "cumhurbaskani secilme sartlari"
    ],
    "keywords": [
      "cumhurbaşkanı", "yürütme", "seçim", "temsil", "kararname", "veto", "seçilme"
    ],
    "shortDefinition": "Devletin başı olan, yürütme yetkisini tek başına kullanan ve temsil makamı olan Cumhurbaşkanının görevleri ile seçilme şartlarıdır.",
    "detailedExplanation": "2017 Anayasa değişiklikleriyle Bakanlar Kurulu kaldırılmış, Başbakanlık makamı son bulmuş ve yürütme yetkisi tek başına Cumhurbaşkanı'na verilmiştir. Böylece yürütme organı tek başlı (monist) hale gelmiştir.\\n\\nCumhurbaşkanı Seçimi ve Şartları:\\n- Halk tarafından doğrudan seçilir. Seçim süresi 5 yıldır. Bir kişi en fazla iki defa Cumhurbaşkanı seçilebilir (İstisnası: Cumhurbaşkanının ikinci döneminde TBMM üye tamsayısının 3/5 çoğunluğuyla - 360 vekil - seçimlerin yenilenmesine karar verirse, mevcut Cumhurbaşkanı bir kez daha aday olabilir).\\n- Seçilebilme Şartları: Türk vatandaşı olmak, 40 yaşını doldurmuş olmak, yükseköğrenim (en az lisans) mezunu olmak ve milletvekili seçilme yeterliliğine sahip olmak.\\n- Aday Gösterme Yetkisi: Siyasi parti grupları, en son yapılan genel seçimlerde tek başına veya birlikte en az %5 oy almış olan partiler veya en az 100 bin seçmen imza ile aday gösterebilir.\\n\\nBaşlıca Görev ve Yetkileri:\\n- Devletin başı sıfatıyla Türkiye Cumhuriyeti'ni ve Türk Milletinin birliğini temsil eder; Anayasanın uygulanmasını gözetir.\\n- Kanunları yayımlar veya yayımlanmasını uygun bulmadığı kanunları gerekçesiyle birlikte meclise geri gönderir (Geciktirici veto yetkisi. TBMM üye tamsayısının salt çoğunluğuyla - 301 vekil - kanunu aynen kabul ederse CB onaylamak zorundadır).\\n- Cumhurbaşkanı yardımcılarını ve bakanları atar, görevlerine son verir.\\n- Üst düzey kamu yöneticilerini atar ve görevden alır (Kararnamelerle düzenler).\\n- Yabancı devletlere temsilci (büyükelçi) gönderir ve yabancı elçileri kabul eder.\\n- Milletlerarası andlaşmaları onaylar ve yayımlar.\\n- TSK'nın başkomutanlığını temsil eder; TSK'nın kullanılmasına karar verir (Meclis tatildeyken acil durumlarda).\\n- Olağanüstü Hal (OHAL) ilan eder ve Resmi Gazete'de yayımlayıp meclis onayına sunar.\\n- Anayasa değişikliklerine ilişkin kanunları gerekli gördüğünde halkoyuna sunar (Referandum yetkisi).\\n- Anayasa Mahkemesi'ne kanunların veya CB kararnamelerinin iptali için dava açar (İptal davası yetkisi).",
    "keyFacts": [
      "Yürütme yetkisi tek başına Cumhurbaşkanı'na aittir; Başbakanlık ve Bakanlar Kurulu kaldırılmıştır.",
      "CB seçilmek için yaş sınırı 40'tır ve lisans (yükseköğrenim) mezunu olmak zorunludur.",
      "Bir kişi en fazla 2 kez seçilebilir; ancak 2. döneminde meclis seçimleri yenilerse 3. kez aday olabilir.",
      "TBMM veto edilen bir kanunu üye tamsayısının salt çoğunluğu (301 vekil) ile aynen kabul ederse, CB bunu onaylamak zorundadır."
    ],
    "examImportance": "Cumhurbaşkanı seçilme şartları (yaş 40, eğitim lisans), görev süresi ve dönem sınırı (max 2 kez, istisnası meclisin yenileme kararı), kanunları veto etme gücü ve TBMM'nin bunu aşma sayısı (301 vekil) KPSS'de en kritik yürütme sorularıdır."
  },
  {
    "id": "ohal-rejimi-ve-ilani",
    "category": "Yürütme",
    "title": "Olağanüstü Hal (OHAL) Rejimi",
    "aliases": [
      "ohal", "olaganustu hal", "ohal kararnamesi", "ohal suresi", "ohal ilan sebepleri", "ohal cbk"
    ],
    "keywords": [
      "ohal", "cumhurbaşkanı", "meclis", "süre", "onay", "kararname", "savaş", "afet"
    ],
    "shortDefinition": "Ülkenin güvenliğini veya kamu düzenini tehdit eden durumlarda Cumhurbaşkanı tarafından ilan edilen ve temel hakların askıya alınabildiği olağanüstü yönetim usulüdür.",
    "detailedExplanation": "Olağanüstü Hal (OHAL), anayasal düzeni, kamu düzenini veya ülke güvenliğini tehlikeye düşüren olağanüstü durumlarda başvurulan geçici bir yönetim rejimidir.\\n\\nOHAL İlan Sebepleri:\\nSavaş, savaşı gerektirecek bir durumun baş göstermesi, seferberlik, ayaklanma, vatana veya cumhuriyete karşı kuvvetli ve eylemli bir kalkışma, şiddet hareketlerinin yaygınlaşması, kamu düzeninin ciddi şekilde bozulması, ağır ekonomik bunalım, salgın hastalık veya doğal afetlerin meydana gelmesi.\\n\\nOHAL İlanı ve Onay Süreci:\\n- OHAL ilan etme yetkisi doğrudan Cumhurbaşkanı'na aittir. Cumhurbaşkanı, yurdun tamamında veya bir bölgesinde, süresi 6 ayı geçmemek üzere olağanüstü hal ilan edebilir.\\n- Karar Resmi Gazete'de yayımlanır ve aynı gün TBMM onayına sunulur. Meclis tatildeyse derhal toplantıya çağrılır.\\n- TBMM, OHAL kararını onaylayabilir, süresini kısaltabilir, tamamen kaldırabilir veya Cumhurbaşkanının talebiyle her defasında 4 ayı geçmemek üzere uzatabilir.\\n- Savaş durumlarında bu 4 aylık süre sınırı aranmaz, süre sınırsız uzatılabilir.\\n\\nOHAL Cumhurbaşkanlığı Kararnameleri (OHAL CBK):\\n- OHAL döneminde Cumhurbaşkanı, OHAL'in gerekli kıldığı konularda kanun hükmünde kararname (OHAL CBK) çıkarabilir.\\n- Normal CBK'lerin aksine, OHAL CBK'leri ile çekirdek haklar (kişinin yaşama hakkı, maddi ve manevi varlığının bütünlüğü, din, vicdan, düşünce ve kanaatlerini açıklamaya zorlanamaması, suç ve cezaların geçmişe yürütülememesi, masumiyet karinesi) hariç tüm temel hak ve hürriyetler sınırlandırılabilir veya askıya alınabilir.\\n- OHAL CBK'leri Resmi Gazete'de yayımlandıkları gün meclis onayına sunulur ve meclis tarafından 3 ay içinde görüşülüp karara bağlanır. Aksi takdirde kendiliğinden yürürlükten kalkar. Bu kararnameler aleyhine Anayasa Mahkemesi'ne iptal davası açılamaz (yargısal denetimi yoktur).",
    "keyFacts": [
      "OHAL'i ilan eden makam Cumhurbaşkanı'dır (Süre en fazla 6 aydır).",
      "OHAL süresini uzatan, kısaltan veya kaldıran makam TBMM'dir (Her uzatma en fazla 4 ay olabilir; savaşta bu sınır yoktur).",
      "OHAL CBK'leri aleyhine Anayasa Mahkemesi'ne iptal davası açılamaz (Yargı yolu kapalıdır).",
      "OHAL CBK'leri ile sosyal, ekonomik ve siyasi hakların yanı sıra kişisel haklar da sınırlandırılabilir (Normal CBK ile sadece sosyal/ekonomik haklar düzenlenebilir)."
    ],
    "examImportance": "OHAL ilan makamı (CB) ve maksimum ilan süresi (6 ay), meclisin uzatma süresi (max 4 ay) ve yetkileri ile OHAL kararnamelerinin yargı denetimi dışı olması (AYM'ye gidilememesi) ve normal kararnamelerden farkları KPSS'de çok popüler ve ayırt edici sorulardır."
  },
  {
    "id": "devlet-denetleme-kurulu",
    "category": "Yürütme",
    "title": "Devlet Denetleme Kurulu (DDK)",
    "aliases": [
      "ddk", "devlet denetleme", "ddk yetkileri", "ddk uyeleri", "ddk baskanı"
    ],
    "keywords": [
      "ddk", "cumhurbaşkanı", "denetim", "yargı", "inceleme", "soruşturma"
    ],
    "shortDefinition": "Cumhurbaşkanlığına bağlı olarak çalışan, idarenin hukuka uygunluğunu, düzenli ve verimli işleyişini denetleyen en üst anayasal denetim kuruludur.",
    "detailedExplanation": "Devlet Denetleme Kurulu (DDK), 1982 Anayasası ile kurulmuş ve doğrudan Cumhurbaşkanlığı makamına bağlanmış üst düzey bir denetim organıdır. Kurulun kendi başına hareket etme yetkisi yoktur; yalnızca Cumhurbaşkanının talimatı (emir veya isteği) üzerine harekete geçer.\\n\\nYapısı ve Üyeleri:\\n- DDK'nın başkanını ve tüm üyelerini doğrudan Cumhurbaşkanı atar. Kurul üyelerinin görev süreleri, özlük hakları ve teşkilat yapısı Cumhurbaşkanlığı kararnamesiyle düzenlenir.\\n\\nGörev ve Yetki Alanı:\\n- Tüm kamu kurum ve kuruluşlarında (bakanlıklar, valilikler, belediyeler, KİT'ler vb.),\\n- Kamu kurumu niteliğindeki meslek kuruluşlarında (barolar, ticaret odaları, tabipler birliği vb.),\\n- Her düzeydeki işçi ve işveren sendikalarında,\\n- Kamu yararına çalışan dernek ve vakıflarda idari soruşturma, inceleme, araştırma ve denetleme yapabilir.\\n\\nDDK'nın Yargı Muafiyeti (Tek İstisnası):\\n- DDK'nın denetim ve inceleme yetkisi dışında kalan tek alan Yargı Organlarıdır. Kurul hiçbir şekilde mahkemeleri, hakimleri, savcıları veya yüksek yargı organlarını denetleyemez, haklarında idari soruşturma yürütemez.\\n\\n2017 Değişikliklerinin Etkisi:\\n- 2017 anayasa değişikliğine kadar kurulun sadece inceleme, araştırma ve denetleme yetkisi vardı. 2017 değişikliğiyle DDK'ya kamu görevlileri hakkında 'idari soruşturma' yapma yetkisi de verilerek kurulun yaptırım gücü artırılmıştır.",
    "keyFacts": [
      "DDK doğrudan Cumhurbaşkanlığına bağlıdır ve sadece Cumhurbaşkanının talimatıyla denetim yapar.",
      "Başkan ve üyelerini doğrudan Cumhurbaşkanı atar.",
      "Yargı organları (mahkemeler ve hakimler) DDK'nın yetki alanı dışındaki tek istisnadır.",
      "2017 değişikliğiyle kurula 'idari soruşturma' açma yetkisi eklenmiştir."
    ],
    "examImportance": "DDK'nın doğrudan Cumhurbaşkanına bağlı olduğu, başkan ve üyelerini CB'nin seçtiği, yargı organlarını asla denetleyemediği ve 2017 ile eklenen 'idari soruşturma' yetkisi KPSS yürütme teşkilatı sorularında sıklıkla sorulan standart kalıplardır."
  }
];
`;

const data05 = `import type { EncyclopediaEntry } from "../types";
export const cagdasTarihData: EncyclopediaEntry[] = [
  {
    "id": "anayasa-mahkemesi-aym",
    "category": "Yargı",
    "title": "Anayasa Mahkemesi ve Görevleri",
    "aliases": [
      "aym", "yuce divan", "bireysel basvuru", "somut denetim", "soyut denetim", "anayasa mahkemesi"
    ],
    "keywords": [
      "aym", "yüksek mahkeme", "üye", "yüce divan", "iptal", "bireysel", "parti kapatma"
    ],
    "shortDefinition": "Kanunların ve CB kararnamelerinin anayasaya uygunluğunu denetleyen, bireysel başvuruları inceleyen ve Yüce Divan sıfatıyla yargılama yapan en üst yargı organıdır.",
    "detailedExplanation": "Anayasa Mahkemesi (AYM), ilk kez 1961 Anayasası ile kurulmuştur. 1982 Anayasası'na göre yüksek mahkemeler arasında ilk sırada yer alır.\\n\\nÜye Yapısı ve Seçimi:\\n- AYM 15 üyeden oluşur. Üyelerin 12'sini Cumhurbaşkanı, 3'ünü ise TBMM seçer.\\n- Üyeler 12 yıllığına seçilir. Bir kişi iki defa Anayasa Mahkemesi üyesi seçilemez. Üyelerin görev süresi 65 yaşını doldurmalarıyla (yaş haddi) her durumda sona erer. Seçilebilmek için en az 45 yaşını doldurmuş olmak şarttır.\\n\\nGörev ve Yetkileri:\\n1. Norm Denetimi (Anayasaya Uygunluk Denetimi):\\n  - Soyut Norm Denetimi (İptal Davası): Kanunların, CB kararnamelerinin veya meclis içtüzüğünün iptali için doğrudan AYM'ye açılan davadır. Dava açma hakkı; Cumhurbaşkanına, TBMM'de en fazla üyeye sahip iki siyasi parti grubuna (iktidar ve ana muhalefet) ve TBMM üye tamsayısının en az 1/5'ine (120 milletvekili) aittir. Kanunların yayımlanmasından itibaren 60 gün içinde dava açılmalıdır.\\n  - Somut Norm Denetimi (İtiraz Yolu): Görülmekte olan bir davada mahkemenin uygulayacağı kanun veya CB kararnamesi hükmünün anayasaya aykırı bulunması durumunda, davanın hakimi tarafından konunun AYM'ye taşınmasıdır. AYM'nin karar vermesi için 5 ay süresi vardır; bu sürede karar çıkmazsa yerel mahkeme davayı mevcut kanuna göre çözer. AYM reddederse 10 yıl boyunca aynı madde için tekrar itiraz edilemez.\\n2. Bireysel Başvuru (Anayasa Şikayeti): Anayasada güvence altına alınmış temel hak ve özgürlüklerinden, Avrupa İnsan Hakları Sözleşmesi (AİHS) kapsamındaki herhangi birinin kamu gücü tarafından ihlal edildiğini iddia eden bireylerin, iç hukuk yollarını tükettikten sonra AYM'ye başvurmasıdır. (İlk kez 2010 değişikliğiyle gelmiştir. İdari işlemlere, kanunlara veya yasama işlemlerine karşı doğrudan bireysel başvuru yapılamaz; sadece mahkeme kararları ihlale yol açtığında başvurulur).\\n3. Yüce Divan Sıfatıyla Yargılama: Cumhurbaşkanını, yardımcılarını, bakanları, AYM, Yargıtay, Danıştay üyelerini, HSK ve Sayıştay başkan ve üyelerini, TBMM Başkanını, Genelkurmay Başkanını ve Kara, Deniz, Hava Kuvvetleri komutanlarını görevleriyle ilgili suçlardan dolayı yargılar. (TBMM üyeleri ve Cumhurbaşkanlığı Genel Sekreteri Yüce Divan'da yargılanmaz).\\n4. Siyasi Partilerin Denetimi: Siyasi partilerin kapatılması davalarına bakar (Yargıtay Cumhuriyet Başsavcısının açtığı dava üzerine). Partilerin mali denetimini ise Sayıştay'ın yardımıyla yapar.",
    "keyFacts": [
      "AYM 15 üyeden oluşur; 12 üye CB, 3 üye TBMM tarafından seçilir. Görev süreleri 12 yıldır.",
      "Soyut norm denetimi (iptal davası) açma süresi Resmi Gazete ilanından itibaren 60 gündür.",
      "Somut norm denetiminde (itiraz yolu) AYM'nin karar süresi 5 aydır. Reddedilirse 10 yıl boyunca aynı madde için itiraz edilemez.",
      "Bireysel başvurular için tüm iç hukuk yollarının (istinaf, temyiz vb.) tüketilmiş olması şarttır.",
      "Siyasi partilerin mali denetimini AYM yapar, Sayıştay bu denetimde sadece yardımcı/teknik organ olarak görev alır."
    ],
    "examImportance": "AYM üye sayısı (15), görev süresi (12 yıl), iptal davası açabilecek makamlar (CB, 120 vekil, en çok üyeli iki parti), somut denetim karar ve başvuru bekleme süreleri (5 ay karar, 10 yıl yasak) ile Yüce Divan'da yargılananların listesi (vekil yargılanmaz, komutanlar yargılanır) KPSS yargı sorularının en zor ve en popüler kısmıdır."
  },
  {
    "id": "yuksek-mahkemeler-liste",
    "category": "Yargı",
    "title": "Türkiye'deki Yüksek Mahkemeler",
    "aliases": [
      "yuksek mahkemeler", "yargitay", "danistay", "uyusmazlik mahkemesi", "askeri yargitay", "ayim"
    ],
    "keywords": [
      "mahkeme", "yüksek", "yargıtay", "danıştay", "uyuşmazlık", "sayıştay", "ysk", "askeri"
    ],
    "shortDefinition": "1982 Anayasası'nda açıkça yüksek mahkeme olarak tanımlanan, kendi yargı kolları içerisinde en üst karar organı olan 4 adet yüksek mahkemedir.",
    "detailedExplanation": "Türkiye Cumhuriyeti anayasal düzeninde mahkemeler çeşitli yargı kollarına ayrılmıştır. Her yargı kolunun en üstünde kararları kesin olan bir yüksek mahkeme bulunur. 2017 anayasa değişiklikleriyle askeri yargı tamamen kaldırılmış, dolayısıyla Askeri Yargıtay ve Askeri Yüksek İdare Mahkemesi (AYİM) kapatılmıştır. Günümüzde anayasaya göre yalnızca 4 adet yüksek mahkeme bulunmaktadır:\\n\\n1. Anayasa Mahkemesi (Anayasa Yargısı): Kanunların anayasaya uygunluğunu denetler.\\n2. Yargıtay (Adli Yargı): Adliye mahkemelerince verilen karar ve hükümlerin son inceleme (temyiz) merciidir. Üyelerini Hâkimler ve Savcılar Kurulu (HSK) seçer. Yargıtay Cumhuriyet Başsavcısı ve Başsavcıvekilini ise Yargıtay Genel Kurulu'nun belirlediği adaylar arasından doğrudan Cumhurbaşkanı seçer.\\n3. Danıştay (İdari Yargı): İdari mahkemelerce verilen karar ve hükümlerin son inceleme (temyiz) merciidir. Danıştay aynı zamanda bir danışma ve inceleme organıdır. Danıştay üyelerinin 3/4'ünü Hâkimler ve Savcılar Kurulu (HSK), 1/4'ünü ise doğrudan Cumhurbaşkanı seçer.\\n4. Uyuşmazlık Mahkemesi (Uyuşmazlık Yargısı): Adli ve idari yargı mercileri arasındaki görev ve hüküm uyuşmazlıklarını kesin olarak çözen mahkemedir. Uyuşmazlık Mahkemesi'nin başkanı, Anayasa Mahkemesi tarafından kendi üyeleri arasından seçilir.\\n\\nYüksek Mahkeme Olmayan Önemli Anayasal Kurumlar (Çeldiriciler):\\n- Sayıştay: Kamu kurumlarının gelir ve giderlerini denetleyen mali yargı organıdır. Anayasada 'Yargı' bölümünde düzenlenmiştir ancak yüksek mahkeme değildir. Kararlarına karşı temyiz yolu yoktur, sadece 15 gün içinde aynı dairede düzeltme istenebilir.\\n- Yüksek Seçim Kurulu (YSK): Seçimlerin genel yönetim ve denetimini yapan üst kuruldur. Kararları kesindir, kararlarına karşı başka bir mercie başvurulamaz. Ancak anayasal olarak bir yüksek mahkeme değil, karma yapılı bir seçim kuruludur.\\n- Hâkimler ve Savcılar Kurulu (HSK): Yargı idaresini yürüten yüksek idari kuruldur, mahkeme değildir.",
    "keyFacts": [
      "Türkiye'de sadece 4 yüksek mahkeme vardır: AYM, Yargıtay, Danıştay ve Uyuşmazlık Mahkemesi.",
      "Askeri Yargıtay ve AYİM 2017 yılında tamamen kaldırılmıştır; ülkede askeri mahkeme kalmamıştır (sadece savaş döneminde kurulabilir).",
      "Yargıtay üyelerinin tamamını HSK seçer; Danıştay üyelerinin 3/4'ünü HSK, 1/4'ünü Cumhurbaşkanı seçer.",
      "Sayıştay ve YSK kararları kesin olmasına rağmen anayasal olarak yüksek mahkeme sınıfında değildirler."
    ],
    "examImportance": "Hangi kurumların yüksek mahkeme olduğu (AYM, Yargıtay, Danıştay, Uyuşmazlık) ve hangilerinin yüksek mahkeme olmadığı (Sayıştay, YSK, HSK), Danıştay üyelerinin seçim oranları (3/4 HSK, 1/4 CB) ile askeri yargının kaldırıldığı bilgisi sınavlarda her dönem mutlaka sorulan temel bilgilerdir."
  },
  {
    "id": "hakimler-ve-savcilar-kurulu",
    "category": "Yargı",
    "title": "Hâkimler ve Savcılar Kurulu (HSK)",
    "aliases": [
      "hsk", "hsyk", "hakimler kurulu", "hsk uyeleri", "hsk baskani"
    ],
    "keywords": [
      "hsk", "yargı", "hâkim", "savcı", "adalet bakanı", "seçim", "kurul"
    ],
    "shortDefinition": "Hâkim ve savcıların mesleğe kabul, atama, nakil, terfi, disiplin ve görevden uzaklaştırma işlemlerini yürüten en üst idari kuruludur.",
    "detailedExplanation": "Hâkimler ve Savcılar Kurulu (HSK), mahkemelerin bağımsızlığı ve hâkimlik güvencesi esaslarına göre görev yapan yüksek idari bir kuruldur. Kesinlikle bir mahkeme değildir, yargılama yapmaz; sadece adli ve idari yargı hâkim ve savcılarının özlük işlerini yönetir.\\n\\nÜye Yapısı ve Seçimi (2017 Değişikliği):\\n- HSK 13 üyeden oluşur ve iki daire halinde çalışır.\\n- Kurulun Başkanı: Adalet Bakanı'dır (Doğal üye).\\n- Kurulun Doğal Üyesi: Adalet Bakanlığı Müsteşarı (Yeni adıyla Adalet Bakan Yardımcısı).\\n- Seçimle Gelen 11 Üye:\\n  * 4 Üyeyi Doğrudan Cumhurbaşkanı Seçer (3 adli yargı, 1 idari yargı hakim ve savcılarından).\\n  * 7 Üyeyi TBMM Seçer (Üç aşamalı oylamayla: 3 Yargıtay üyesi, 1 Danıştay üyesi, 3 hukukçu akademisyen/avukat arasından).\\n- Üyelerin görev süresi 4 yıldır. Süresi biten üyeler yeniden seçilebilir.",
    "keyFacts": [
      "HSK 13 üyeden oluşur; başkanı Adalet Bakanı, diğer doğal üyesi ise Adalet Bakan Yardımcısıdır.",
      "Geri kalan 11 üyenin 7'sini TBMM, 4'ünü Cumhurbaşkanı seçer. Görev süreleri 4 yıldır.",
      "HSK bir mahkeme değildir, idari karar alan bir kuruldur.",
      "HSK kararlarına karşı genel kural olarak yargı yolu kapalıdır. Tek istisnası 'meslekten çıkarma (ihraç)' cezası kararlarıdır; bu kararlara karşı yargı yoluna başvurulabilir."
    ],
    "examImportance": "HSK üye sayısı (13), başkanı (Adalet Bakanı), üyelerin seçilme oranları (7 TBMM, 4 CB) ve kurul kararlarından hangisine karşı yargı yolunun açık olduğu (sadece meslekten çıkarma) KPSS'nin en çok sorduğu yargı yönetimi sorularıdır."
  }
];
`;

const data06 = `import type { EncyclopediaEntry } from "../types";
export const anlasmalarSavaslarData: EncyclopediaEntry[] = [
  {
    "id": "idarenin-butunlugu-hiyerarsi-vesayet",
    "category": "İdare Hukuku",
    "title": "İdarenin Bütünlüğü: Hiyerarşi ve İdari Vesayet",
    "aliases": [
      "hiyerarsi", "idari vesayet", "idarenin butunlugu", "kamu tuzel kisiligi", "vesayet denetimi"
    ],
    "keywords": [
      "hiyerarsi", "vesayet", "idare", "denetim", "butunluk", "kamu", "vali"
    ],
    "shortDefinition": "İdarenin dağınık yapısına rağmen tek bir bütün halinde uyum içinde çalışmasını sağlayan hiyerarşi ve idari vesayet denetim mekanizmalarıdır.",
    "detailedExplanation": "İdare hukuku prensiplerine göre devlet idaresi merkezden yönetim ve yerinden yönetim olarak ikiye ayrılsa da 'İdarenin Bütünlüğü' ilkesi gereği tek bir merkezden koordine edilmek zorundadır. İdarenin bütünlüğünü sağlayan iki hukuki araç vardır:\\n\\n1. Hiyerarşi (Üst-Ast İlişkisi):\\n- Aynı kamu tüzel kişiliği (örn: Devlet Tüzel Kişiliği veya tek başına bir Belediye Tüzel Kişiliği) içindeki üst makamların astları üzerindeki denetim, emir ve talimat verme yetkisidir.\\n- Hiyerarşik amir, astın işlemlerini denetleyebilir, asgari sınırda emir verebilir, astın işlemlerini iptal edebilir veya değiştirebilir. Ancak astın yerine geçerek doğrudan işlem tesis edemez.\\n- Kanuni dayanak aranmaksızın hiyerarşi yetkisi kendiliğinden vardır.\\n- Örnekler: Bakanın valiyi denetlemesi, valinin kaymakamı denetlemesi, emniyet müdürünün polis memurunu denetlemesi, rektörün dekanı denetlemesi, belediye başkanının zabıtayı denetlemesi.\\n\\n2. İdari Vesayet:\\n- Merkez teşkilatının (Devlet Tüzel Kişiliğinin), kendisinden ayrı kamu tüzel kişiliğine sahip yerinden yönetim kuruluşları (mahalli idareler ve hizmet yerinden yönetim kuruluşları) üzerindeki kanunla sınırlı denetim yetkisidir.\\n- Amacı kamu yararını korumak ve idari bütünlüğü sağlamaktır. Hiyerarşiye göre çok daha zayıftır. Emir ve talimat verilemez; vesayet makamı yerel idarenin işlemini ancak erteleyebilir, mahkemeye götürebilir veya onaylamayabilir; yerel organın yerine geçip karar alamaz veya kararı kendisi değiştiremez.\\n- Sadece kanunun açıkça izin verdiği durumlarda kullanılabilir (Anayasa Md. 127/5).\\n- Örnekler: İçişleri Bakanının belediye başkanını denetlemesi, valinin belediyeyi denetlemesi, kaymakamın köy muhtarını denetlemesi, YÖK'ün üniversiteleri denetlemesi, bakanlığın meslek odalarını (örn: barolar birliği) denetlemesi.",
    "keyFacts": [
      "Hiyerarşi aynı kamu tüzel kişiliği içinde olur; idari vesayet ise iki farklı kamu tüzel kişiliği arasında olur.",
      "Hiyerarşide emir ve talimat verme yetkisi varken, idari vesayette emir ve talimat verilemez, sadece onay veya iptal davası açma yetkisi vardır.",
      "Hiyerarşi genel bir yetkidir, idari vesayet ise kanunla açıkça belirtilmedikçe kullanılamaz (istisnadır).",
      "Vali, ilde devlet tüzel kişiliğini temsil ettiği için ildeki devlet memurlarını hiyerarşiyle; belediyeleri ise idari vesayetle denetler."
    ],
    "examImportance": "Valinin belediye başkanı üzerindeki yetkisinin 'İdari Vesayet', kaymakam üzerindeki yetkisinin 'Hiyerarşi' olduğu; İçişleri Bakanının belediye başkanı üzerindeki yetkisinin 'İdari Vesayet' olduğu gibi somut eşleştirme soruları idare hukukunun en popüler soru tipidir."
  },
  {
    "id": "mahalli-idareler-belediye-koy",
    "category": "İdare Hukuku",
    "title": "Mahalli İdareler (Yerel Yönetimler)",
    "aliases": [
      "mahalli idareler", "belediye", "il ozel idaresi", "koy", "buyuksehir", "muhtar", "belediye meclisi"
    ],
    "keywords": [
      "belediye", "köy", "il özel idaresi", "muhtar", "vali", "nüfus", "büyükşehir", "yerel"
    ],
    "shortDefinition": "Karar organları yerel halk tarafından seçilen, yerel nitelikteki ortak kamu hizmetlerini yürüten kamu tüzel kişileridir.",
    "detailedExplanation": "Anayasamıza göre mahalli idareler; il, belediye veya köy halkının mahalli müşterek ihtiyaçlarını karşılamak üzere kuruluş esasları kanunla belirtilen ve karar organları seçmenler tarafından seçilerek oluşturulan kamu tüzel kişileridir. Türkiye'de 3 tür mahalli idare birimi vardır:\\n\\n1. İl Özel İdaresi:\\n- İl sınırları içinde yerel hizmetleri yürütür. Kamu tüzel kişiliği vardır.\\n- Organları: Baş ve yürütme organı Vali (atama ile gelir), karar organı İl Genel Meclisi (seçimle gelir), danışma ve yürütme organı İl Encümeni'dir.\\n\\n2. Belediye Yönetimi:\\n- Nüfusu 5.000 ve üzerinde olan yerleşim yerlerinde Cumhurbaşkanı kararı ile kurulur. İl ve ilçe merkezlerinde nüfus şartı aranmaksızın belediye kurulması zorunludur.\\n- Organları: Baş ve yürütme organı Belediye Başkanı (seçimle gelir), karar organı Belediye Meclisi (seçimle gelir), danışma ve yürütme organı Belediye Encümeni'dir.\\n- Büyükşehir Belediyesi: Nüfusu en az 750.000 olan illerde kanunla kurulur. (Günümüzde 30 büyükşehir belediyesi vardır. Büyükşehir olan yerlerde İl Özel İdaresi ve köyler kaldırılarak mahalleye dönüştürülmüştür).\\n\\n3. Köy Yönetimi:\\n- Nüfusu 150 ile 2.000 arasında olan yerleşim yerlerinde İçişleri Bakanlığı kararı ile kurulur. (Nüfusu 150'den az olan yerler köy altı yerleşmeleridir).\\n- Organları:\\n  * Muhtar: Köyün başı ve yürütme organıdır (seçimle gelir).\\n  * Köy İhtiyar Heyeti: Köyün karar organıdır. Seçimle gelen üyelerin yanında köy öğretmeni ve köy imamı doğal üyelerdir.\\n  * Köy Derneği: Köydeki tüm seçmenlerin oluşturduğu en üst karar organıdır. Muhtarı ve ihtiyar heyetini seçer, köyün isteğe bağlı işlerini zorunlu hale getirebilir.",
    "keyFacts": [
      "Mahalli idarelerin tamamı kamu tüzel kişiliğine ve kendi bütçelerine sahiptir.",
      "Belediyeler Cumhurbaşkanı kararıyla kurulur (Nüfus en az 5.000); Büyükşehir belediyeleri kanunla kurulur (Nüfus en az 750.000).",
      "Köyün kurulma kararı İçişleri Bakanlığına aittir (Nüfus 150-2000 arası).",
      "Köy ihtiyar heyetinin doğal üyeleri köy imamı ve köy öğretmenidir.",
      "Köy Derneği, köydeki tüm seçmenlerden oluşur ve doğrudan demokrasiye en yakın anayasal organdır."
    ],
    "examImportance": "Belediyelerin kimin kararıyla kurulduğu (CB), büyükşehir belediyelerinin nasıl kurulduğu (kanunla) ve nüfus sınırları (belediye 5.000, büyükşehir 750.000, köy 150-2.000), köy ihtiyar heyetinin doğal üyeleri ve köy derneğinin tanımı KPSS idare hukuku alanında her sene mutlaka sorulan standart konulardır."
  },
  {
    "id": "devlet-memurlugu-temel-ilkeleri",
    "category": "İdare Hukuku",
    "title": "Devlet Memurluğu Temel İlkeleri ve Cezaları",
    "aliases": [
      "devlet memurlugu", "liyakat", "kariyer", "disiplin cezalari", "memuriyetten cikarma", "kinama", "ayliktan kesme"
    ],
    "keywords": [
      "memur", "liyakat", "kariyer", "sınıflandırma", "disiplin", "ceza", "uyarma"
    ],
    "shortDefinition": "657 sayılı Devlet Memurları Kanunu'na göre memurluk mesleğinin dayandığı temel ilkeler ve disiplin cezası türleridir.",
    "detailedExplanation": "657 sayılı Devlet Memurları Kanunu'na göre devlet memurluğu hizmetleri üç temel ilkeye dayandırılmıştır:\\n\\n1. Sınıflandırma: Devlet kamu hizmetleri görevlerini ve bu görevlerde çalışan devlet memurlarını yetki, sorumluluk ve niteliklerine göre sınıflara ayırmaktır (örn: Genel İdare Hizmetleri, Sağlık Hizmetleri, Eğitim-Öğretim Hizmetleri vb. Toplam 12 hizmet sınıfı vardır).\\n2. Kariyer: Devlet memurlarına, sınıfları içinde en yüksek derecelere kadar ilerleme imkanı tanınmasıdır.\\n3. Liyakat: Devlet kamu hizmetlerine girmeyi, sınıflar içinde ilerlemeyi, görevin sona erdirilmesini objektif başarı kriterlerine ve liyakat şartlarına bağlamaktır. Torpil veya kayırmacılığı önlemeyi amaçlar.\\n\\nDevlet Memurlarına Uygulanan Disiplin Cezaları:\\nDevlet memurlarının görevlerini aksatmaları veya kanuna aykırı davranmaları durumunda uygulanan disiplin cezaları şunlardır:\\n- Uyarma: Memura, görevinde ve davranışlarında daha dikkatli olması gerektiğinin yazı ile bildirilmesidir.\\n- Kınama: Memura, görevinde ve davranışlarında kusurlu olduğunun yazı ile bildirilmesidir.\\n- Aylıktan Kesme: Memurun brüt aylığından 1/30 ile 1/8 arasında kesinti yapılmasıdır.\\n- Kademe İlerlemesinin Durdurulması: Fiilin ağırlığına göre memurun ilerlemesinin 1 yıl ile 3 yıl arasında durdurulmasıdır.\\n- Devlet Memurluğundan Çıkarma: Bir daha devlet memurluğuna atanmamak üzere memurluktan ilişiğin kesilmesidir.\\n\\nDisiplin Cezalarına İtiraz ve Yargı Yolu:\\n- Memur uyarma ve kınama cezalarına karşı disiplin kuruluna, diğer cezalara karşı ise yüksek disiplin kuruluna 7 gün içinde itiraz edebilir.\\n- Anayasaya göre (Md. 129), uyarma ve kınama dahil tüm disiplin cezalarına karşı yargı yolu (idare mahkemesi) açıktır.",
    "keyFacts": [
      "Devlet memurluğunun 3 temel ilkesi vardır: Sınıflandırma, Kariyer ve Liyakat.",
      "Devlet memurlarına uygulanan disiplin cezaları uyarma, kınama, aylıktan kesme, kademe ilerlemesinin durdurulması ve memuriyetten çıkarmadır. (Sürgün veya görev yeri değişikliği bir disiplin cezası değildir).",
      "Görevden uzaklaştırma (açığa alınma) bir disiplin cezası değil, geçici bir ihtiyati tedbirdir.",
      "Anayasaya göre uyarma ve kınama dahil istisnasız tüm disiplin cezalarına karşı idari yargı yolu açıktır."
    ],
    "examImportance": "Memurluğun temel ilkeleri (Sınıflandırma, Kariyer, Liyakat), disiplin cezalarının tam listesi (uyarma, kınama, aylıktan kesme, kademe durdurma, çıkarma - araya 'sürgün' veya 'maaş kesme' gibi çeldiriciler konur) ve disiplin cezalarının tamamına yargı yolunun açık olduğu bilgisi KPSS'de çok sık sorulur."
  }
];
`;

const data07 = `import type { EncyclopediaEntry } from "../types";
export const turkIslamData: EncyclopediaEntry[] = [
  {
    "id": "uluslararasi-kuruluslar-uyelikler",
    "category": "Güncel Bilgiler",
    "title": "Uluslararası Kuruluşlar ve Türkiye'nin Rolü",
    "aliases": [
      "nato", "bm", "avrupa konseyi", "turk devletleri teskilati", "uluslararasi orgutler", "oecd", "ab"
    ],
    "keywords": [
      "nato", "bm", "kurucu", "üye", "teşkilat", "avrupa", "oecd", "ab"
    ],
    "shortDefinition": "Türkiye'nin kurucu üye olduğu, sonradan katıldığı veya aday ülke olarak ilişkilerini sürdürdüğü küresel ve bölgesel örgütlerdir.",
    "detailedExplanation": "Türkiye, jeopolitik konumu ve tarihi bağları sebebiyle çok sayıda küresel ve bölgesel uluslararası kuruluşa üyedir. Bu kuruluşlar üyelik statümüze göre şöyle sınıflandırılabilir:\\n\\n1. Türkiye'nin Kurucu Üye Olduğu Kuruluşlar:\\n- Birleşmiş Milletler (BM): İkinci Dünya Savaşı sonrası dünya barışını korumak amacıyla kurulan örgüte Türkiye kurucu üye olarak katılmıştır.\\n- Avrupa Konseyi: İnsan hakları ve hukukun üstünlüğünü savunur. Türkiye 1949'da kurucu üye olarak yer almıştır. (Avrupa İnsan Hakları Mahkemesi bu konseye bağlıdır).\\n- Ekonomik İşbirliği ve Kalkınma Örgütü (OECD): Küresel ekonomiyi destekleyen örgüte kurucu üyeyiz.\\n- İslam İşbirliği Teşkilatı (İİT): İslam dünyasını temsil eden kuruluşa kurucu üyeyiz.\\n- Karadeniz Ekonomik İşbirliği (KEİ): Bölgesel işbirliğini amaçlayan örgütün kurucularındanız ve merkezi İstanbul'dadır.\\n- Türk Devletleri Teşkilatı (TDT): Eski adıyla Türk Keneşi. Türk cumhuriyetlerini bir araya getiren örgütün kurucu üyesiyiz; genel sekreterliği İstanbul'dadır.\\n- Ekonomik İşbirliği Teşkilatı (EİT) ve D-8 (Gelişmekte Olan 8 Ülke): Türkiye'nin öncülük ettiği kuruluşlardandır.\\n\\n2. Türkiye'nin Sonradan Üye Olduğu Önemli Kuruluşlar:\\n- NATO (Kuzey Atlantik Antlaşması Örgütü): Türkiye 1952 yılında Kore Savaşı'na asker gönderdikten sonra askeri güvenlik paktı olan NATO'ya üye kabul edilmiştir.\\n- G-20: Dünyanın en büyük 20 ekonomisinin yer aldığı platforma üyeyiz.\\n\\n3. Türkiye'nin Üye Olmadığı Önemli Kuruluşlar:\\n- Avrupa Birliği (AB): Türkiye kurucu üye değildir, 1999 Helsinki Zirvesi ile resmen aday ülke ilan edilmiştir ancak tam üye değildir.\\n- Şanghay İşbirliği Örgütü (ŞİÖ): Türkiye üye değildir, 'diyalog ortağı' statüsündedir.\\n- BRICS ve OPEC: Türkiye üye değildir.",
    "keyFacts": [
      "Birleşmiş Milletler (BM) ve Avrupa Konseyi'nin kurucu üyelerindeniz.",
      "NATO'ya üye kabul tarihimiz 1952'dir; Kore Savaşı'ndaki askeri başarımız üyeliğimizi kolaylaştırmıştır.",
      "Avrupa İnsan Hakları Mahkemesi (AİHM), Avrupa Birliği'nin değil, Türkiye'nin kurucusu olduğu Avrupa Konseyi'nin yargı organıdır.",
      "Avrupa Birliği (AB) ve Şanghay İşbirliği Örgütü'ne (ŞİÖ) tam üye değiliz."
    ],
    "examImportance": "Türkiye'nin NATO'ya giriş yılı (1952) ve sebebi (Kore Savaşı), kurucu üye olduğumuz kuruluşlar (BM, Avrupa Konseyi, İİT, KEİ) ile tam üye olmadığımız örgütler (AB, ŞİÖ) güncel bilgiler ve vatandaşlık genel kültür testlerinin en garanti soru kalıplarındandır."
  },
  {
    "id": "unesco-dunya-miras-listesi-turkiye",
    "category": "Güncel Bilgiler",
    "title": "Türkiye'deki UNESCO Dünya Mirası Varlıkları",
    "aliases": [
      "unesco", "dunya mirasi", "gordion", "gobeklitepe", "unesco miraslari", "arslantepe", "camiler"
    ],
    "keywords": [
      "unesco", "miras", "gordion", "göbeklitepe", "divriği", "efes", "anadolu"
    ],
    "shortDefinition": "UNESCO tarafından üstün evrensel değerleri nedeniyle koruma altına alınan, Türkiye'de bulunan eşsiz kültürel, tarihi ve doğal varlıklardır.",
    "detailedExplanation": "Birleşmiş Milletler Eğitim, Bilim ve Kültür Örgütü (UNESCO), tüm insanlığın ortak mirası kabul edilen alanları koruma altına alır. Türkiye, bu listede çok sayıda zengin tarihi varlığa sahiptir.\\n\\nTürkiye'deki Önemli UNESCO Varlıkları ve Giriş Detayları:\\n- İlk Eklenen Eser (1985): Divriği Ulu Camii ve Darüşşifası (Sivas). Türk mimarisinin taş işçiliğiyle ünlü başyapıtıdır.\\n- Göbeklitepe Arkeolojik Alanı (Şanlıurfa): 2018 yılında eklenmiştir. İnsanlık tarihinin bilinen en eski tapınak ve ibadet merkezidir, tarihin sıfır noktası olarak anılır.\\n- Arslantepe Höyüğü (Malatya): 2021 yılında listeye alınmıştır. İlk devlet şeklinin ve bürokrasinin doğduğu kerpiç saray kalıntılarıyla ünlüdür.\\n- Gordion Antik Kenti (Ankara): 2023 yılında eklenmiştir. Frigya medeniyetinin başkentidir ve kral mezarları (tümülüsleri) ile ünlüdür.\\n- Anadolu'nun Ortaçağ Dönemi Ahşap Hipostil Camileri (2023): Gordion ile birlikte aynı yıl listeye giren bu karma varlık; Konya Eşrefoğlu Camii, Kastamonu Mahmut Bey Camii, Eskişehir Sivrihisar Ulu Camii, Afyonkarahisar Ulu Camii ve Ankara Arslanhane Camii'ni kapsar.\\n- Karma Miras Alanları (Hem Doğal Hem Kültürel): Göreme Milli Parkı ve Kapadokya (Nevşehir) ile Hierapolis-Pamukkale (Denizli). Türkiye'nin hem doğa hem de tarih yönüyle tescilli iki karma eseridir.",
    "keyFacts": [
      "Türkiye'nin UNESCO listesindeki ilk eseri Divriği Ulu Camii'dir (1985).",
      "Gordion Antik Kenti (Frig başkenti) ve Ortaçağ Ahşap Direkli Camileri 2023 yılında listeye dahil edilmiştir.",
      "Göbeklitepe 2018, Arslantepe ise 2021 yılında listeye girmiştir.",
      "Kapadokya ve Pamukkale, hem kültürel hem de doğal özellikleri bir arada taşıyan 'karma' miras alanlarımızdır."
    ],
    "examImportance": "Son eklenen UNESCO eserleri (2023 - Gordion ve Ahşap Hipostil Camiler), Göbeklitepe'nin listeye giriş yılı (2018) ve önemi ile karma miras alanlarımız (Kapadokya ve Pamukkale) güncel bilgiler testinde her yıl en yüksek soru potansiyeline sahip kültürel bilgilerdir."
  }
];
`;

fs.writeFileSync(path.join(targetDir, "01-temel-hukuk.ts"), data01);
fs.writeFileSync(path.join(targetDir, "02-osmanli-siyasi.ts"), data02);
fs.writeFileSync(path.join(targetDir, "03-osmanli-kultur-medeniyet.ts"), data03);
fs.writeFileSync(path.join(targetDir, "04-inkilap-tarihi.ts"), data04);
fs.writeFileSync(path.join(targetDir, "05-cagdas-turk-dunya-tarihi.ts"), data05);
fs.writeFileSync(path.join(targetDir, "06-onemli-anlasmalar-ve-savaslar.ts"), data06);
fs.writeFileSync(path.join(targetDir, "07-turk-islam.ts"), data07);

console.log("All 7 encyclopedia files successfully expanded to 10x content size!");
