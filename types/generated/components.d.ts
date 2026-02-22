import type { Schema, Struct } from '@strapi/strapi';

export interface AboutChtoOtlichaetNasOtDrugih extends Struct.ComponentSchema {
  collectionName: 'components_about_chto_otlichaet_nas_ot_drugih';
  info: {
    displayName: '\u0427\u0442\u043E \u043E\u0442\u043B\u0438\u0447\u0430\u0435\u0442 \u043D\u0430\u0441 \u043E\u0442 \u0434\u0440\u0443\u0433\u0438\u0445';
  };
  attributes: {
    description: Schema.Attribute.Text;
    diffrents: Schema.Attribute.Component<'shered.kartinka-tekst-tekst', true>;
    h2: Schema.Attribute.String;
  };
}

export interface AboutKomanda extends Struct.ComponentSchema {
  collectionName: 'components_about_komanda';
  info: {
    displayName: '\u041A\u043E\u043C\u0430\u043D\u0434\u0430';
  };
  attributes: {
    description: Schema.Attribute.Text;
    h2: Schema.Attribute.String;
    people: Schema.Attribute.Component<
      'shered.kartinka-tekst-tekst-tekst',
      true
    >;
  };
}

export interface AboutNasheProizvodstvoTehnologiiIMoshhnosti
  extends Struct.ComponentSchema {
  collectionName: 'components_about_nashe_proizvodstvo_tehnologii_i_moshhnosti';
  info: {
    displayName: '\u041D\u0430\u0448\u0435 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u043E \u2014 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438 \u0438 \u043C\u043E\u0449\u043D\u043E\u0441\u0442\u0438';
  };
  attributes: {
    data: Schema.Attribute.JSON;
    description: Schema.Attribute.Text;
    h2: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface AboutOKompanii extends Struct.ComponentSchema {
  collectionName: 'components_about_o_kompanii';
  info: {
    displayName: '\u041E \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438';
  };
  attributes: {
    description: Schema.Attribute.Text;
    h2: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    ourmission: Schema.Attribute.String;
    p1: Schema.Attribute.Text;
    slogan: Schema.Attribute.Text;
    text: Schema.Attribute.Text;
    text2: Schema.Attribute.Text;
    text3: Schema.Attribute.Text;
  };
}

export interface AboutOtzyvyNashihKlientov extends Struct.ComponentSchema {
  collectionName: 'components_about_otzyvy_nashih_klientov';
  info: {
    displayName: '\u041E\u0442\u0437\u044B\u0432\u044B \u043D\u0430\u0448\u0438\u0445 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432';
  };
  attributes: {
    description: Schema.Attribute.Text;
    h2: Schema.Attribute.String;
    reviews: Schema.Attribute.Component<'shered.tekst-tekst-tekst', true>;
  };
}

export interface AboutPartneram extends Struct.ComponentSchema {
  collectionName: 'components_about_partneram';
  info: {
    displayName: '\u041F\u0430\u0440\u0442\u043D\u0435\u0440\u0430\u043C';
  };
  attributes: {
    buttonText: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    h3: Schema.Attribute.String;
    list: Schema.Attribute.Blocks;
  };
}

export interface AboutSertifikatyKachestvaISootvetstviya
  extends Struct.ComponentSchema {
  collectionName: 'components_about_sertifikaty_kachestva_i_sootvetstviya';
  info: {
    displayName: '\u0421\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u044B \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0430 \u0438 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u044F';
  };
  attributes: {
    buttonText: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    h2: Schema.Attribute.String;
    sertificates: Schema.Attribute.Component<'shered.advantage', true>;
  };
}

export interface AboutTryohurovnevayaSistemaKontrolyaKachestva
  extends Struct.ComponentSchema {
  collectionName: 'components_about_tryohurovnevaya_sistema_kontrolya_kachestva';
  info: {
    displayName: '\u0422\u0440\u0451\u0445\u0443\u0440\u043E\u0432\u043D\u0435\u0432\u0430\u044F \u0441\u0438\u0441\u0442\u0435\u043C\u0430 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044F \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0430';
  };
  attributes: {
    description: Schema.Attribute.Text;
    h2: Schema.Attribute.String;
    text: Schema.Attribute.Blocks;
    text2: Schema.Attribute.Blocks;
    text3: Schema.Attribute.Blocks;
    text4: Schema.Attribute.Blocks;
  };
}

export interface AboutVCzifrahFakty extends Struct.ComponentSchema {
  collectionName: 'components_about_v_czifrah_fakty_s';
  info: {
    displayName: '\u0432 \u0446\u0438\u0444\u0440\u0430\u0445 \u2014  \u0444\u0430\u043A\u0442\u044B,';
  };
  attributes: {
    facts: Schema.Attribute.Component<'shered.tekst-tekst', true>;
    h2: Schema.Attribute.String;
  };
}

export interface AboutVakansii extends Struct.ComponentSchema {
  collectionName: 'components_about_vakansii';
  info: {
    displayName: '\u0412\u0430\u043A\u0430\u043D\u0441\u0438\u0438';
  };
  attributes: {
    buttonText: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    h3: Schema.Attribute.String;
    list: Schema.Attribute.Blocks;
  };
}

export interface HomeAdvantages extends Struct.ComponentSchema {
  collectionName: 'components_home_advantages';
  info: {
    displayName: '\u041F\u0440\u0435\u0435\u043C\u0443\u0437\u0435\u0441\u0442\u0432\u0430';
  };
  attributes: {
    advantages: Schema.Attribute.Component<'shered.advantage', true>;
  };
}

export interface HomeEkosistema extends Struct.ComponentSchema {
  collectionName: 'components_home_ekosistema';
  info: {
    displayName: '\u042D\u043A\u043E\u0441\u0438\u0441\u0442\u0435\u043C\u0430';
  };
  attributes: {
    controlText: Schema.Attribute.Text;
    description: Schema.Attribute.String;
    ecosystemList: Schema.Attribute.Component<
      'shered.ekosistema-spisok-komponent',
      true
    >;
    h2: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface HomeIsledovnie extends Struct.ComponentSchema {
  collectionName: 'components_home_isledovnie';
  info: {
    displayName: '\u0418\u0441\u043B\u0435\u0434\u043E\u0432\u043D\u0438\u0435';
  };
  attributes: {
    butt: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    h2: Schema.Attribute.String;
    imageDesktop: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    imageMobile: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

export interface HomeMaterial extends Struct.ComponentSchema {
  collectionName: 'components_home_materials';
  info: {
    displayName: '\u041C\u0430\u0442\u0435\u0440\u0438\u0430\u043B';
  };
  attributes: {
    ad: Schema.Attribute.Component<'shered.advantage', true>;
    blockquote: Schema.Attribute.Text;
    h2: Schema.Attribute.String;
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    mobileImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    structure: Schema.Attribute.Text;
  };
}

export interface HomeOtlichiya extends Struct.ComponentSchema {
  collectionName: 'components_home_otlichiya';
  info: {
    displayName: '\u041E\u0442\u043B\u0438\u0447\u0438\u044F';
  };
  attributes: {
    advantages: Schema.Attribute.Component<'shered.advantage', true>;
    h2: Schema.Attribute.String;
    image1: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    image2: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface HomeProekty extends Struct.ComponentSchema {
  collectionName: 'components_home_proekty';
  info: {
    displayName: '\u041F\u0440\u043E\u0435\u043A\u0442\u044B';
  };
  attributes: {
    buttonText: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    h2: Schema.Attribute.String;
  };
}

export interface HomeRabotaemSArhitektoramiIZastrojshhikam
  extends Struct.ComponentSchema {
  collectionName: 'components_home_rabotaem_s_arhitektorami_i_zastrojshhikam';
  info: {
    displayName: '\u0420\u0430\u0431\u043E\u0442\u0430\u0435\u043C \u0441 \u0430\u0440\u0445\u0438\u0442\u0435\u043A\u0442\u043E\u0440\u0430\u043C\u0438 \u0438 \u0437\u0430\u0441\u0442\u0440\u043E\u0439\u0449\u0438\u043A\u0430\u043C';
  };
  attributes: {
    buttonText: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    h2: Schema.Attribute.String;
    imageDesktop: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    imageMobile: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

export interface HowWeWorks5EtapovSProzrachnymiSrokami
  extends Struct.ComponentSchema {
  collectionName: 'components_how_we_works_5_etapov_s_prozrachnymi_srokami';
  info: {
    displayName: '5 \u044D\u0442\u0430\u043F\u043E\u0432 \u0441 \u043F\u0440\u043E\u0437\u0440\u0430\u0447\u043D\u044B\u043C\u0438 \u0441\u0440\u043E\u043A\u0430\u043C\u0438';
  };
  attributes: {
    de: Schema.Attribute.Text;
    h2: Schema.Attribute.String;
    stages: Schema.Attribute.Component<'shered.tekst-tekst-tekst', true>;
    stages2: Schema.Attribute.Component<'how-we-works.etapy', false>;
  };
}

export interface HowWeWorksChtoDelaetMenedzherProekta
  extends Struct.ComponentSchema {
  collectionName: 'components_how_we_works_chto_delaet_menedzher_proekta_s';
  info: {
    displayName: '\u0427\u0442\u043E \u0434\u0435\u043B\u0430\u0435\u0442 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440 \u043F\u0440\u043E\u0435\u043A\u0442\u0430?';
  };
  attributes: {
    h2: Schema.Attribute.String;
    text1: Schema.Attribute.Blocks;
    text2: Schema.Attribute.Blocks;
    text3: Schema.Attribute.Blocks;
    text4: Schema.Attribute.Blocks;
    text5: Schema.Attribute.Blocks;
    text6: Schema.Attribute.Blocks;
  };
}

export interface HowWeWorksChtoVhoditVFiksirovannuyuCzenu
  extends Struct.ComponentSchema {
  collectionName: 'components_how_we_works_chto_vhodit_v_fiksirovannuyu_czenu';
  info: {
    displayName: '\u0427\u0442\u043E \u0432\u0445\u043E\u0434\u0438\u0442 \u0432 \u0444\u0438\u043A\u0441\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u0443\u044E \u0446\u0435\u043D\u0443';
  };
  attributes: {
    content: Schema.Attribute.Blocks;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface HowWeWorksEtapKomponent extends Struct.ComponentSchema {
  collectionName: 'components_how_we_works_etap_komponent';
  info: {
    displayName: '\u042D\u0442\u0430\u043F \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    importent: Schema.Attribute.Text;
    number: Schema.Attribute.String;
    questions: Schema.Attribute.Component<'shered.question', true>;
    title: Schema.Attribute.String;
  };
}

export interface HowWeWorksEtapy extends Struct.ComponentSchema {
  collectionName: 'components_how_we_works_etapy';
  info: {
    displayName: '\u042D\u0442\u0430\u043F\u044B';
  };
  attributes: {
    stages: Schema.Attribute.Component<'how-we-works.etap-komponent', true>;
  };
}

export interface HowWeWorksFiksirovannayaCzenaVDogovoreBezDoplat
  extends Struct.ComponentSchema {
  collectionName: 'components_how_we_works_fiksirovannaya_czena_v_dogovore_bez_doplat_s';
  info: {
    displayName: '\u0424\u0438\u043A\u0441\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u0430\u044F \u0446\u0435\u043D\u0430 \u0432 \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u0435. \u0411\u0435\u0437 \u0434\u043E\u043F\u043B\u0430\u0442.';
  };
  attributes: {
    description1: Schema.Attribute.Text;
    description2: Schema.Attribute.Text;
    description3: Schema.Attribute.Text;
    h2: Schema.Attribute.String;
    what: Schema.Attribute.Component<
      'how-we-works.chto-vhodit-v-fiksirovannuyu-czenu',
      false
    >;
    when: Schema.Attribute.Component<
      'how-we-works.kogda-czena-mo-zh-et-izmenitsya-tolko-po-soglasovaniyu',
      false
    >;
  };
}

export interface HowWeWorksKogdaCzenaMoZhEtIzmenitsyaTolkoPoSoglasovaniyu
  extends Struct.ComponentSchema {
  collectionName: 'components_how_we_works_kogda_czena_mo_zh_et_izmenitsya_tolko_po_soglasovaniyu_s';
  info: {
    displayName: '\u041A\u043E\u0433\u0434\u0430 \u0446\u0435\u043D\u0430 \u041C\u041E\u0416\u0415\u0422 \u0438\u0437\u043C\u0435\u043D\u0438\u0442\u044C\u0441\u044F (\u0442\u043E\u043B\u044C\u043A\u043E \u043F\u043E \u0441\u043E\u0433\u043B\u0430\u0441\u043E\u0432\u0430\u043D\u0438\u044E):';
  };
  attributes: {
    content: Schema.Attribute.Blocks;
    h3: Schema.Attribute.String;
  };
}

export interface HowWeWorksOdinMenedzherVedyotVashProektOtNachalaDoKoncza
  extends Struct.ComponentSchema {
  collectionName: 'components_how_we_works_odin_menedzher_vedyot_vash_proekt_ot_nachala_do_koncza';
  info: {
    displayName: '\u041E\u0434\u0438\u043D \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440 \u0432\u0435\u0434\u0451\u0442 \u0432\u0430\u0448 \u043F\u0440\u043E\u0435\u043A\u0442 \u043E\u0442 \u043D\u0430\u0447\u0430\u043B\u0430 \u0434\u043E \u043A\u043E\u043D\u0446\u0430';
  };
  attributes: {
    description1: Schema.Attribute.Text;
    description2: Schema.Attribute.Text;
    description3: Schema.Attribute.String;
    h2: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface HowWeWorksStrukturaOplaty extends Struct.ComponentSchema {
  collectionName: 'components_how_we_works_struktura_oplaty';
  info: {
    displayName: '\u0421\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0430 \u043E\u043F\u043B\u0430\u0442\u044B';
  };
  attributes: {
    h2: Schema.Attribute.String;
    item1: Schema.Attribute.Blocks;
    item2: Schema.Attribute.Blocks;
    item3: Schema.Attribute.Blocks;
  };
}

export interface HowWeWorksVyKontrolirueteKazhdyjEtap
  extends Struct.ComponentSchema {
  collectionName: 'components_how_we_works_vy_kontroliruete_kazhdyj_etap';
  info: {
    displayName: '\u0412\u044B \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u0438\u0440\u0443\u0435\u0442\u0435 \u043A\u0430\u0436\u0434\u044B\u0439 \u044D\u0442\u0430\u043F';
  };
  attributes: {
    h2: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    list: Schema.Attribute.Component<'shered.tekst', true>;
  };
}

export interface HowWeWorksVyKontrolirueteKazhdyjEtapProekta
  extends Struct.ComponentSchema {
  collectionName: 'components_how_we_works_vy_kontroliruete_kazhdyj_etap_proekta';
  info: {
    displayName: '\u0412\u044B \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u0438\u0440\u0443\u0435\u0442\u0435 \u043A\u0430\u0436\u0434\u044B\u0439 \u044D\u0442\u0430\u043F \u043F\u0440\u043E\u0435\u043A\u0442\u0430';
  };
  attributes: {
    description: Schema.Attribute.Text;
    h2: Schema.Attribute.String;
    h3: Schema.Attribute.String;
    list1: Schema.Attribute.Component<'shered.tekst-tekst', true>;
    list2: Schema.Attribute.Component<'shered.tekst-tekst-tekst', true>;
  };
}

export interface InstallationAfterherodata extends Struct.ComponentSchema {
  collectionName: 'components_installation_afterherodata';
  info: {
    displayName: 'afterherodata';
  };
  attributes: {
    data: Schema.Attribute.Component<'shered.tekst-tekst', true>;
  };
}

export interface InstallationChtoVhoditVGarantijnoeObsluzhivanie
  extends Struct.ComponentSchema {
  collectionName: 'components_installation_chto_vhodit_v_garantijnoe_obsluzhivanie';
  info: {
    displayName: '\u0427\u0442\u043E \u0432\u0445\u043E\u0434\u0438\u0442 \u0432 \u0433\u0430\u0440\u0430\u043D\u0442\u0438\u0439\u043D\u043E\u0435 \u043E\u0431\u0441\u043B\u0443\u0436\u0438\u0432\u0430\u043D\u0438\u0435';
  };
  attributes: {
    h2: Schema.Attribute.String;
    iamge: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    text1: Schema.Attribute.Blocks;
    text2: Schema.Attribute.Blocks;
    text3: Schema.Attribute.Blocks;
    text4: Schema.Attribute.Blocks;
  };
}

export interface InstallationGarantiiNaMontazhIMaterial
  extends Struct.ComponentSchema {
  collectionName: 'components_installation_garantii_na_montazh_i_material';
  info: {
    displayName: '\u0413\u0430\u0440\u0430\u043D\u0442\u0438\u0438 \u043D\u0430 \u043C\u043E\u043D\u0442\u0430\u0436 \u0438 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B';
  };
  attributes: {
    description: Schema.Attribute.Text;
    h2: Schema.Attribute.String;
    table: Schema.Attribute.JSON;
  };
}

export interface InstallationInstrumentyKontrolyaKachestva
  extends Struct.ComponentSchema {
  collectionName: 'components_installation_instrumenty_kontrolya_kachestva';
  info: {
    displayName: '\u0418\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044F \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0430';
  };
  attributes: {
    h4: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    list: Schema.Attribute.Component<'shered.tekst', true>;
  };
}

export interface InstallationKakProhoditMontazh5Etapov
  extends Struct.ComponentSchema {
  collectionName: 'components_installation_kak_prohodit_montazh_5_etapov';
  info: {
    displayName: '\u041A\u0430\u043A \u043F\u0440\u043E\u0445\u043E\u0434\u0438\u0442 \u043C\u043E\u043D\u0442\u0430\u0436: 5 \u044D\u0442\u0430\u043F\u043E\u0432';
  };
  attributes: {
    h2: Schema.Attribute.String;
    Important: Schema.Attribute.Text;
    stages: Schema.Attribute.Component<'shered.step-installation', true>;
    totalInstallationTime: Schema.Attribute.Text;
    totalInstallationTime2: Schema.Attribute.Text;
  };
}

export interface InstallationMontazhKruglyjGodDazheZimoj
  extends Struct.ComponentSchema {
  collectionName: 'components_installation_montazh_kruglyj_god_dazhe_zimoj_s';
  info: {
    displayName: '\u041C\u043E\u043D\u0442\u0430\u0436 \u043A\u0440\u0443\u0433\u043B\u044B\u0439 \u0433\u043E\u0434. \u0414\u0430\u0436\u0435 \u0437\u0438\u043C\u043E\u0439.';
  };
  attributes: {
    data: Schema.Attribute.Component<'shered.tekst-tekst', true>;
    description: Schema.Attribute.Text;
    description2: Schema.Attribute.Text;
    h2: Schema.Attribute.String;
    limitations: Schema.Attribute.Blocks;
    statistics: Schema.Attribute.Blocks;
  };
}

export interface InstallationNashiMontazhnikiSertificzirovannyeProfessionaly
  extends Struct.ComponentSchema {
  collectionName: 'components_installation_nashi_montazhniki_sertificzirovannye_professionaly';
  info: {
    displayName: '\u041D\u0430\u0448\u0438 \u043C\u043E\u043D\u0442\u0430\u0436\u043D\u0438\u043A\u0438 \u2014 \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u0446\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0435 \u043F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u044B';
  };
  attributes: {
    description: Schema.Attribute.Text;
    h2: Schema.Attribute.String;
    image1: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    image2: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    image3: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    list: Schema.Attribute.Component<'shered.tekst', true>;
    text1: Schema.Attribute.Blocks;
    text2: Schema.Attribute.Blocks;
    text3: Schema.Attribute.Blocks;
  };
}

export interface InstallationPochemuMontazhApexEtoBezopasno
  extends Struct.ComponentSchema {
  collectionName: 'components_installation_pochemu_montazh_apex_eto_bezopasno';
  info: {
    displayName: '\u041F\u043E\u0447\u0435\u043C\u0443 \u043C\u043E\u043D\u0442\u0430\u0436 APEX \u2014 \u044D\u0442\u043E \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E';
  };
  attributes: {
    points: Schema.Attribute.Component<'shered.tekst-tekst-tekst', true>;
  };
}

export interface InstallationPosmotriteKakMyMontiruem
  extends Struct.ComponentSchema {
  collectionName: 'components_installation_posmotrite_kak_my_montiruem';
  info: {
    displayName: '\u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0438\u0442\u0435, \u043A\u0430\u043A \u043C\u044B \u043C\u043E\u043D\u0442\u0438\u0440\u0443\u0435\u043C';
  };
  attributes: {
    description: Schema.Attribute.Text;
    h2: Schema.Attribute.String;
    video: Schema.Attribute.Component<'shered.video', true>;
  };
}

export interface InstallationProjects extends Struct.ComponentSchema {
  collectionName: 'components_installation_projects';
  info: {
    displayName: 'projects';
  };
  attributes: {
    buttonText: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    h2: Schema.Attribute.String;
  };
}

export interface InstallationSravnenieTehnologij
  extends Struct.ComponentSchema {
  collectionName: 'components_installation_sravnenie_tehnologij';
  info: {
    displayName: '\u0421\u0440\u0430\u0432\u043D\u0435\u043D\u0438\u0435 \u0442\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0439';
  };
  attributes: {
    h2: Schema.Attribute.String;
    image1: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    table: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface InstallationStatistika extends Struct.ComponentSchema {
  collectionName: 'components_installation_statistika';
  info: {
    displayName: '\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430';
  };
  attributes: {
    h4: Schema.Attribute.String;
    list: Schema.Attribute.Component<'shered.tekst', true>;
  };
}

export interface InstallationTryohurovnevayaSistemaKontrolyaKachestva
  extends Struct.ComponentSchema {
  collectionName: 'components_installation_tryohurovnevaya_sistema_kontrolya_kachestva';
  info: {
    displayName: '\u0422\u0440\u0451\u0445\u0443\u0440\u043E\u0432\u043D\u0435\u0432\u0430\u044F \u0441\u0438\u0441\u0442\u0435\u043C\u0430 \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044F \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0430';
  };
  attributes: {
    description: Schema.Attribute.Text;
    h2: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    levels: Schema.Attribute.Component<'shered.level', true>;
  };
}

export interface InstallationUzlyKrepleniyaITehnicheskieResheniya
  extends Struct.ComponentSchema {
  collectionName: 'components_installation_uzly_krepleniya_i_tehnicheskie_resheniya';
  info: {
    displayName: '\u0423\u0437\u043B\u044B \u043A\u0440\u0435\u043F\u043B\u0435\u043D\u0438\u044F \u0438 \u0442\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u044F';
  };
  attributes: {
    content: Schema.Attribute.Blocks;
    description: Schema.Attribute.Text;
    h2: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface MaterialAdditionalFeatures extends Struct.ComponentSchema {
  collectionName: 'components_material_additional_features';
  info: {
    displayName: 'additionalFeatures';
  };
  attributes: {
    additionalFeatures: Schema.Attribute.JSON;
    butonText: Schema.Attribute.String;
    h3: Schema.Attribute.String;
  };
}

export interface MaterialChtoTakoePolimerbeton extends Struct.ComponentSchema {
  collectionName: 'components_material_chto_takoe_polimerbeton_s';
  info: {
    displayName: '\u0427\u0442\u043E \u0442\u0430\u043A\u043E\u0435 \u043F\u043E\u043B\u0438\u043C\u0435\u0440\u0431\u0435\u0442\u043E\u043D?';
  };
  attributes: {
    description: Schema.Attribute.Text;
    h2: Schema.Attribute.String;
  };
}

export interface MaterialKakMyProizvodimPolimerbeton
  extends Struct.ComponentSchema {
  collectionName: 'components_material_kak_my_proizvodim_polimerbeton_s';
  info: {
    displayName: '\u041A\u0430\u043A \u043C\u044B \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u043C \u043F\u043E\u043B\u0438\u043C\u0435\u0440\u0431\u0435\u0442\u043E\u043D?';
  };
  attributes: {
    buttonText: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    h2: Schema.Attribute.String;
    stages: Schema.Attribute.Component<'shered.tekst-tekst-tekst', true>;
  };
}

export interface MaterialPochemuPolimerbetonLuchsheDrugihMaterialov
  extends Struct.ComponentSchema {
  collectionName: 'components_material_pochemu_polimerbeton_luchshe_drugih_materialov_s';
  info: {
    displayName: '\u041F\u043E\u0447\u0435\u043C\u0443 \u043F\u043E\u043B\u0438\u043C\u0435\u0440\u0431\u0435\u0442\u043E\u043D \u043B\u0443\u0447\u0448\u0435 \u0434\u0440\u0443\u0433\u0438\u0445 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u043E\u0432?';
  };
  attributes: {
    description: Schema.Attribute.Text;
    h2: Schema.Attribute.String;
    table: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface MaterialRealnayaEkonomiyaNaDistanczii
  extends Struct.ComponentSchema {
  collectionName: 'components_material_realnaya_ekonomiya_na_distanczii';
  info: {
    displayName: '\u0420\u0435\u0430\u043B\u044C\u043D\u0430\u044F \u044D\u043A\u043E\u043D\u043E\u043C\u0438\u044F \u043D\u0430 \u0434\u0438\u0441\u0442\u0430\u043D\u0446\u0438\u0438';
  };
  attributes: {
    description: Schema.Attribute.Text;
    final: Schema.Attribute.String;
    h2: Schema.Attribute.String;
    materilas: Schema.Attribute.Component<'shered.material', true>;
  };
}

export interface MaterialSertifikatyKachestvaIProtokolyIspytanij
  extends Struct.ComponentSchema {
  collectionName: 'components_material_sertifikaty_kachestva_i_protokoly_ispytanij';
  info: {
    displayName: '\u0421\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u044B \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0430 \u0438 \u043F\u0440\u043E\u0442\u043E\u043A\u043E\u043B\u044B \u0438\u0441\u043F\u044B\u0442\u0430\u043D\u0438\u0439';
  };
  attributes: {
    description: Schema.Attribute.Text;
    h2: Schema.Attribute.String;
    sertificates: Schema.Attribute.Component<'shered.advantage', true>;
  };
}

export interface MaterialSostavTehnologiyaRezultat
  extends Struct.ComponentSchema {
  collectionName: 'components_material_sostav_tehnologiya_rezultat';
  info: {
    displayName: '\u0421\u043E\u0441\u0442\u0430\u0432 \u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u044F \u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442';
  };
  attributes: {
    dignities: Schema.Attribute.Component<'shered.tekst-tekst', true>;
  };
}

export interface MaterialTehnicheskieHarakteristikiPolimerbetona
  extends Struct.ComponentSchema {
  collectionName: 'components_material_tehnicheskie_harakteristiki_polimerbetona';
  info: {
    displayName: '\u0422\u0435\u0445\u043D\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0445\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043A\u0438 \u043F\u043E\u043B\u0438\u043C\u0435\u0440\u0431\u0435\u0442\u043E\u043D\u0430';
  };
  attributes: {
    characteristics: Schema.Attribute.Component<
      'shered.kartinka-tekst-tekst',
      true
    >;
    h2: Schema.Attribute.String;
  };
}

export interface MaterialVideo extends Struct.ComponentSchema {
  collectionName: 'components_material_video';
  info: {
    displayName: '\u0412\u0438\u0434\u0435\u043E';
  };
  attributes: {
    texts: Schema.Attribute.Component<'shered.tekst-tekst', true>;
  };
}

export interface PriceChtoVliyaetNaItogovuyuStoimost
  extends Struct.ComponentSchema {
  collectionName: 'components_price_chto_vliyaet_na_itogovuyu_stoimost_s';
  info: {
    displayName: '\u0427\u0442\u043E \u0432\u043B\u0438\u044F\u0435\u0442 \u043D\u0430 \u0438\u0442\u043E\u0433\u043E\u0432\u0443\u044E \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C:';
  };
  attributes: {
    h3: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    stages: Schema.Attribute.Blocks;
  };
}

export interface PriceChtoVliyaetNaStoimostProekta
  extends Struct.ComponentSchema {
  collectionName: 'components_price_chto_vliyaet_na_stoimost_proekta';
  info: {
    displayName: '\u0427\u0442\u043E \u0432\u043B\u0438\u044F\u0435\u0442 \u043D\u0430 \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u043F\u0440\u043E\u0435\u043A\u0442\u0430';
  };
  attributes: {
    description: Schema.Attribute.Text;
    factors: Schema.Attribute.Component<'shered.tekst-tekst-tekst', true>;
    h2: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface PriceDlyaYuridicheskihLicz extends Struct.ComponentSchema {
  collectionName: 'components_price_dlya_yuridicheskih_licz';
  info: {
    displayName: '\u0414\u043B\u044F \u044E\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u043B\u0438\u0446';
  };
  attributes: {
    butonText: Schema.Attribute.String;
    h4: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    listitems: Schema.Attribute.Component<'shered.tekst', true>;
  };
}

export interface PriceEtapyOplatyZaMontazh extends Struct.ComponentSchema {
  collectionName: 'components_price_etapy_oplaty_za_montazh';
  info: {
    displayName: '\u042D\u0442\u0430\u043F\u044B \u043E\u043F\u043B\u0430\u0442\u044B \u0437\u0430 \u043C\u043E\u043D\u0442\u0430\u0436';
  };
  attributes: {
    h4: Schema.Attribute.String;
    stages: Schema.Attribute.Component<'shered.tekst-tekst-tekst', true>;
  };
}

export interface PriceInvesticziyaVArhitekturuProzrachnoIChestno
  extends Struct.ComponentSchema {
  collectionName: 'components_price_investicziya_v_arhitekturu_prozrachno_i_chestno';
  info: {
    displayName: '\u0418\u043D\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u044F \u0432 \u0430\u0440\u0445\u0438\u0442\u0435\u043A\u0442\u0443\u0440\u0443 \u2014 \u043F\u0440\u043E\u0437\u0440\u0430\u0447\u043D\u043E \u0438 \u0447\u0435\u0441\u0442\u043D\u043E';
  };
  attributes: {
    description: Schema.Attribute.String;
    h2: Schema.Attribute.String;
    h4: Schema.Attribute.String;
    p: Schema.Attribute.Text;
    table: Schema.Attribute.JSON;
  };
}

export interface PricePolnayaStoimostVladeniyaSchitaemNaDistanczii
  extends Struct.ComponentSchema {
  collectionName: 'components_price_polnaya_stoimost_vladeniya_schitaem_na_distanczii';
  info: {
    displayName: '\u041F\u043E\u043B\u043D\u0430\u044F \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0432\u043B\u0430\u0434\u0435\u043D\u0438\u044F \u2014 \u0441\u0447\u0438\u0442\u0430\u0435\u043C \u043D\u0430 \u0434\u0438\u0441\u0442\u0430\u043D\u0446\u0438\u0438';
  };
  attributes: {
    description: Schema.Attribute.Text;
    h2: Schema.Attribute.String;
    listitems: Schema.Attribute.Component<'shered.tekst', true>;
    span: Schema.Attribute.Blocks;
    table: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface PriceRealnyeProektyStoimostISroki
  extends Struct.ComponentSchema {
  collectionName: 'components_price_realnye_proekty_stoimost_i_sroki';
  info: {
    displayName: '\u0420\u0435\u0430\u043B\u044C\u043D\u044B\u0435 \u043F\u0440\u043E\u0435\u043A\u0442\u044B \u2014 \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0438 \u0441\u0440\u043E\u043A\u0438';
  };
  attributes: {
    butonText: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    h2: Schema.Attribute.String;
  };
}

export interface PriceUdobnyeSposobyOplaty extends Struct.ComponentSchema {
  collectionName: 'components_price_udobnye_sposoby_oplaty';
  info: {
    displayName: '\u0423\u0434\u043E\u0431\u043D\u044B\u0435 \u0441\u043F\u043E\u0441\u043E\u0431\u044B \u043E\u043F\u043B\u0430\u0442\u044B';
  };
  attributes: {
    description: Schema.Attribute.Text;
    description2: Schema.Attribute.String;
    h2: Schema.Attribute.String;
    smartpayment: Schema.Attribute.Component<
      'price.umnaya-poetapnaya-oplata',
      false
    >;
    stages: Schema.Attribute.Component<'price.etapy-oplaty-za-montazh', false>;
    yourface: Schema.Attribute.Component<
      'price.dlya-yuridicheskih-licz',
      false
    >;
  };
}

export interface PriceUmnayaPoetapnayaOplata extends Struct.ComponentSchema {
  collectionName: 'components_price_umnaya_poetapnaya_oplata';
  info: {
    displayName: '\u0423\u043C\u043D\u0430\u044F \u043F\u043E\u044D\u0442\u0430\u043F\u043D\u0430\u044F \u043E\u043F\u043B\u0430\u0442\u0430';
  };
  attributes: {
    h4: Schema.Attribute.String;
    stahes: Schema.Attribute.Component<'shered.tekst-tekst-tekst', true>;
  };
}

export interface PriceVseVklyuchenoVStoimost extends Struct.ComponentSchema {
  collectionName: 'components_price_vse_vklyucheno_v_stoimost_s';
  info: {
    displayName: '\u0412\u0441\u0435 \u0432\u043A\u043B\u044E\u0447\u0435\u043D\u043E \u0432 \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C:';
  };
  attributes: {
    h3: Schema.Attribute.String;
    point: Schema.Attribute.Component<'shered.tekst', true>;
  };
}

export interface SheredAdvantage extends Struct.ComponentSchema {
  collectionName: 'components_shered_advantages';
  info: {
    displayName: '\u0422\u0435\u043A\u0441\u0442 \u0438\u043A\u043E\u043D\u043A\u0430';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SheredComent extends Struct.ComponentSchema {
  collectionName: 'components_shered_coments';
  info: {
    displayName: 'coment';
  };
  attributes: {
    admin_user: Schema.Attribute.Relation<'oneToOne', 'admin::user'>;
    content: Schema.Attribute.Text;
    type: Schema.Attribute.Enumeration<
      ['default', 'successes', 'destructive', 'info']
    >;
  };
}

export interface SheredEkosistemaSpisokKomponent
  extends Struct.ComponentSchema {
  collectionName: 'components_shered_ekosistema_spisok_komponent';
  info: {
    displayName: '\u0415\u043A\u043E\u0441\u0438\u0441\u0442\u0435\u043C\u0430 \u0441\u043F\u0438\u0441\u043E\u043A \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442';
  };
  attributes: {
    description: Schema.Attribute.String;
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    number: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SheredForma extends Struct.ComponentSchema {
  collectionName: 'components_shered_forma';
  info: {
    displayName: '\u0424\u043E\u0440\u043C\u0430';
  };
  attributes: {
    buttonText: Schema.Attribute.String;
    description: Schema.Attribute.String;
    h2: Schema.Attribute.String;
    succsessText: Schema.Attribute.Text;
  };
}

export interface SheredHeader extends Struct.ComponentSchema {
  collectionName: 'components_shered_headers';
  info: {
    displayName: '\u0428\u0430\u043F\u043A\u0430';
  };
  attributes: {
    buttonText: Schema.Attribute.String;
    logo: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    navItems: Schema.Attribute.Component<'shered.link', true>;
  };
}

export interface SheredHero extends Struct.ComponentSchema {
  collectionName: 'components_shered_heroes';
  info: {
    displayName: '\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u0433\u0435\u0440\u043E\u0439 ';
  };
  attributes: {
    buttonText: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    imageDesktop: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    imageMobile: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    title: Schema.Attribute.String;
  };
}

export interface SheredKartinkaTekstTekst extends Struct.ComponentSchema {
  collectionName: 'components_shered_kartinka_tekst_tekst';
  info: {
    displayName: '\u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0430 \u0442\u0435\u043A\u0441\u0442 \u0442\u0435\u043A\u0441\u0442';
  };
  attributes: {
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    text1: Schema.Attribute.String;
    text2: Schema.Attribute.Text;
  };
}

export interface SheredKartinkaTekstTekstTekst extends Struct.ComponentSchema {
  collectionName: 'components_shered_kartinka_tekst_tekst_tekst';
  info: {
    displayName: '\u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0430 \u0442\u0435\u043A\u0441\u0442 \u0442\u0435\u043A\u0441\u0442 \u0442\u0435\u043A\u0441\u0442';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    text1: Schema.Attribute.String;
    text2: Schema.Attribute.Text;
    text3: Schema.Attribute.Text;
  };
}

export interface SheredLevel extends Struct.ComponentSchema {
  collectionName: 'components_shered_levels';
  info: {
    displayName: 'level';
  };
  attributes: {
    content: Schema.Attribute.Blocks;
    content2: Schema.Attribute.Blocks;
    h4: Schema.Attribute.String;
    number: Schema.Attribute.String;
    result: Schema.Attribute.String;
  };
}

export interface SheredLink extends Struct.ComponentSchema {
  collectionName: 'components_shered_links';
  info: {
    displayName: '\u0421\u0441\u044B\u043B\u043A\u0430';
  };
  attributes: {
    href: Schema.Attribute.String;
    label: Schema.Attribute.String;
  };
}

export interface SheredMaterial extends Struct.ComponentSchema {
  collectionName: 'components_shered_materials';
  info: {
    displayName: 'material';
  };
  attributes: {
    characteristic: Schema.Attribute.Component<'shered.tekst-tekst', true>;
    title: Schema.Attribute.String;
  };
}

export interface SheredQuestion extends Struct.ComponentSchema {
  collectionName: 'components_shered_questions';
  info: {
    displayName: 'question';
  };
  attributes: {
    answer: Schema.Attribute.Component<'shered.tekst', true>;
    question: Schema.Attribute.String;
  };
}

export interface SheredSpisok extends Struct.ComponentSchema {
  collectionName: 'components_shered_spisok';
  info: {
    displayName: '\u0441\u043F\u0438\u0441\u043E\u043A';
  };
  attributes: {
    list: Schema.Attribute.Component<'shered.advantage', true>;
    listitem: Schema.Attribute.Component<'shered.tekst', true>;
    text: Schema.Attribute.String;
  };
}

export interface SheredStepInstallation extends Struct.ComponentSchema {
  collectionName: 'components_shered_step_installations';
  info: {
    displayName: 'stepInstallation';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    list: Schema.Attribute.Blocks;
    number: Schema.Attribute.String;
    title: Schema.Attribute.Text;
  };
}

export interface SheredTekst extends Struct.ComponentSchema {
  collectionName: 'components_shered_tekst';
  info: {
    displayName: '\u0442\u0435\u043A\u0441\u0442';
  };
  attributes: {
    text: Schema.Attribute.String;
  };
}

export interface SheredTekstTekst extends Struct.ComponentSchema {
  collectionName: 'components_shered_tekst_tekst';
  info: {
    displayName: '\u0422\u0435\u043A\u0441\u0442 \u0442\u0435\u043A\u0441\u0442';
  };
  attributes: {
    text1: Schema.Attribute.String;
    text2: Schema.Attribute.Text;
  };
}

export interface SheredTekstTekstTekst extends Struct.ComponentSchema {
  collectionName: 'components_shered_tekst_tekst_tekst';
  info: {
    displayName: '\u0442\u0435\u043A\u0441\u0442 \u0442\u0435\u043A\u0441\u0442 \u0442\u0435\u043A\u0441\u0442';
  };
  attributes: {
    text1: Schema.Attribute.String;
    text2: Schema.Attribute.Text;
    text3: Schema.Attribute.Text;
  };
}

export interface SheredVideo extends Struct.ComponentSchema {
  collectionName: 'components_shered_videos';
  info: {
    displayName: '\u0412\u0438\u0434\u0435\u043E';
  };
  attributes: {
    Image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'about.chto-otlichaet-nas-ot-drugih': AboutChtoOtlichaetNasOtDrugih;
      'about.komanda': AboutKomanda;
      'about.nashe-proizvodstvo-tehnologii-i-moshhnosti': AboutNasheProizvodstvoTehnologiiIMoshhnosti;
      'about.o-kompanii': AboutOKompanii;
      'about.otzyvy-nashih-klientov': AboutOtzyvyNashihKlientov;
      'about.partneram': AboutPartneram;
      'about.sertifikaty-kachestva-i-sootvetstviya': AboutSertifikatyKachestvaISootvetstviya;
      'about.tryohurovnevaya-sistema-kontrolya-kachestva': AboutTryohurovnevayaSistemaKontrolyaKachestva;
      'about.v-czifrah-fakty': AboutVCzifrahFakty;
      'about.vakansii': AboutVakansii;
      'home.advantages': HomeAdvantages;
      'home.ekosistema': HomeEkosistema;
      'home.isledovnie': HomeIsledovnie;
      'home.material': HomeMaterial;
      'home.otlichiya': HomeOtlichiya;
      'home.proekty': HomeProekty;
      'home.rabotaem-s-arhitektorami-i-zastrojshhikam': HomeRabotaemSArhitektoramiIZastrojshhikam;
      'how-we-works.5-etapov-s-prozrachnymi-srokami': HowWeWorks5EtapovSProzrachnymiSrokami;
      'how-we-works.chto-delaet-menedzher-proekta': HowWeWorksChtoDelaetMenedzherProekta;
      'how-we-works.chto-vhodit-v-fiksirovannuyu-czenu': HowWeWorksChtoVhoditVFiksirovannuyuCzenu;
      'how-we-works.etap-komponent': HowWeWorksEtapKomponent;
      'how-we-works.etapy': HowWeWorksEtapy;
      'how-we-works.fiksirovannaya-czena-v-dogovore-bez-doplat': HowWeWorksFiksirovannayaCzenaVDogovoreBezDoplat;
      'how-we-works.kogda-czena-mo-zh-et-izmenitsya-tolko-po-soglasovaniyu': HowWeWorksKogdaCzenaMoZhEtIzmenitsyaTolkoPoSoglasovaniyu;
      'how-we-works.odin-menedzher-vedyot-vash-proekt-ot-nachala-do-koncza': HowWeWorksOdinMenedzherVedyotVashProektOtNachalaDoKoncza;
      'how-we-works.struktura-oplaty': HowWeWorksStrukturaOplaty;
      'how-we-works.vy-kontroliruete-kazhdyj-etap': HowWeWorksVyKontrolirueteKazhdyjEtap;
      'how-we-works.vy-kontroliruete-kazhdyj-etap-proekta': HowWeWorksVyKontrolirueteKazhdyjEtapProekta;
      'installation.afterherodata': InstallationAfterherodata;
      'installation.chto-vhodit-v-garantijnoe-obsluzhivanie': InstallationChtoVhoditVGarantijnoeObsluzhivanie;
      'installation.garantii-na-montazh-i-material': InstallationGarantiiNaMontazhIMaterial;
      'installation.instrumenty-kontrolya-kachestva': InstallationInstrumentyKontrolyaKachestva;
      'installation.kak-prohodit-montazh-5-etapov': InstallationKakProhoditMontazh5Etapov;
      'installation.montazh-kruglyj-god-dazhe-zimoj': InstallationMontazhKruglyjGodDazheZimoj;
      'installation.nashi-montazhniki-sertificzirovannye-professionaly': InstallationNashiMontazhnikiSertificzirovannyeProfessionaly;
      'installation.pochemu-montazh-apex-eto-bezopasno': InstallationPochemuMontazhApexEtoBezopasno;
      'installation.posmotrite-kak-my-montiruem': InstallationPosmotriteKakMyMontiruem;
      'installation.projects': InstallationProjects;
      'installation.sravnenie-tehnologij': InstallationSravnenieTehnologij;
      'installation.statistika': InstallationStatistika;
      'installation.tryohurovnevaya-sistema-kontrolya-kachestva': InstallationTryohurovnevayaSistemaKontrolyaKachestva;
      'installation.uzly-krepleniya-i-tehnicheskie-resheniya': InstallationUzlyKrepleniyaITehnicheskieResheniya;
      'material.additional-features': MaterialAdditionalFeatures;
      'material.chto-takoe-polimerbeton': MaterialChtoTakoePolimerbeton;
      'material.kak-my-proizvodim-polimerbeton': MaterialKakMyProizvodimPolimerbeton;
      'material.pochemu-polimerbeton-luchshe-drugih-materialov': MaterialPochemuPolimerbetonLuchsheDrugihMaterialov;
      'material.realnaya-ekonomiya-na-distanczii': MaterialRealnayaEkonomiyaNaDistanczii;
      'material.sertifikaty-kachestva-i-protokoly-ispytanij': MaterialSertifikatyKachestvaIProtokolyIspytanij;
      'material.sostav-tehnologiya-rezultat': MaterialSostavTehnologiyaRezultat;
      'material.tehnicheskie-harakteristiki-polimerbetona': MaterialTehnicheskieHarakteristikiPolimerbetona;
      'material.video': MaterialVideo;
      'price.chto-vliyaet-na-itogovuyu-stoimost': PriceChtoVliyaetNaItogovuyuStoimost;
      'price.chto-vliyaet-na-stoimost-proekta': PriceChtoVliyaetNaStoimostProekta;
      'price.dlya-yuridicheskih-licz': PriceDlyaYuridicheskihLicz;
      'price.etapy-oplaty-za-montazh': PriceEtapyOplatyZaMontazh;
      'price.investicziya-v-arhitekturu-prozrachno-i-chestno': PriceInvesticziyaVArhitekturuProzrachnoIChestno;
      'price.polnaya-stoimost-vladeniya-schitaem-na-distanczii': PricePolnayaStoimostVladeniyaSchitaemNaDistanczii;
      'price.realnye-proekty-stoimost-i-sroki': PriceRealnyeProektyStoimostISroki;
      'price.udobnye-sposoby-oplaty': PriceUdobnyeSposobyOplaty;
      'price.umnaya-poetapnaya-oplata': PriceUmnayaPoetapnayaOplata;
      'price.vse-vklyucheno-v-stoimost': PriceVseVklyuchenoVStoimost;
      'shered.advantage': SheredAdvantage;
      'shered.coment': SheredComent;
      'shered.ekosistema-spisok-komponent': SheredEkosistemaSpisokKomponent;
      'shered.forma': SheredForma;
      'shered.header': SheredHeader;
      'shered.hero': SheredHero;
      'shered.kartinka-tekst-tekst': SheredKartinkaTekstTekst;
      'shered.kartinka-tekst-tekst-tekst': SheredKartinkaTekstTekstTekst;
      'shered.level': SheredLevel;
      'shered.link': SheredLink;
      'shered.material': SheredMaterial;
      'shered.question': SheredQuestion;
      'shered.spisok': SheredSpisok;
      'shered.step-installation': SheredStepInstallation;
      'shered.tekst': SheredTekst;
      'shered.tekst-tekst': SheredTekstTekst;
      'shered.tekst-tekst-tekst': SheredTekstTekstTekst;
      'shered.video': SheredVideo;
    }
  }
}
