<template>
  <div class="wrapper">
    <parallax class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div class="md-layout-item">
            <h1 class="title">貼り込み資料画像検索プロトタイプ
            </h1>
            <br>
            <md-button v-bind:to="{ name : 'search'}" class="md-success md-lg">
              <i class="fas fa-search"></i>試してみる
            </md-button>
          </div>
        </div>
      </div>
    </parallax>
    <div class="main main-raised">
      <div class="section" id="about">
        <div class="container">
          <div class="md-layout">
            <div class="md-layout-item md-size-66 md-xsmall-size-100 mx-auto text-center">
              <h2 class="title text-center">About</h2>

              <div class="alert alert-info">
                <div class="container">
                  本システムはプロトタイプ（試作品）であり、データ等が予告なく変更される可能性があります。この点を了解の上でご利用ください。
                </div>
              </div>

              <br/>

              <h5 class="description">&nbsp;&nbsp;本システムは東京大学総合図書館が公開する
                <a href="https://iiif.dl.itc.u-tokyo.ac.jp/repo/s/tanaka">田中芳男・博物学コレクション</a>の資料と、国立国会図書館デジタルコレクションで公開されている
                <a href="http://dl.ndl.go.jp/info:ndljp/pid/2610716">張交帖</a>を対象として、貼り込まれた資料単位での画像検索が可能なプロトタイプです。2019年1月末時点において、99帖、13,069コマ、34,746件の貼り込み資料が検索対象となっています。
              </h5>
              <h5 class="description">&nbsp;&nbsp;貼り込み資料の抽出は、物体検出アルゴリズムYOLO v3を用いて、機械的に実行しています。また、
                <a href="https://kunshujo.dl.itc.u-tokyo.ac.jp/">電子展示『&#25411;拾帖』</a>で公開されている貼り込み資料2,645件をモデルのファインチューニングに利用しています。詳細については、
                <a href="https://docs.google.com/presentation/d/1sfb57LXGQSNgJEvaqQUsjzImA6hoVBFBHyban4deYGA/edit?usp=sharing">こちらの資料</a>をご確認ください。機械的な抽出処理を行っているため、
                <b>貼り込み資料の抽出漏れ、および抽出誤りが含まれている点にご注意ください</b>。
              </h5>
              <h5 class="description">&nbsp;&nbsp;画像の閲覧ビューアには、人文学オープンデータ共同利用センターが開発した
                <a href="http://codh.rois.ac.jp/software/iiif-curation-viewer/">IIIF Curation Viewer</a>を利用しています。
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div class="section" id="example">
        <div class="container">
          <div class="md-layout">
            <div class="md-layout-item md-size-66 md-xsmall-size-100 mx-auto text-center">
              <h2 class="title text-center">検索例</h2>
              <div class="md-layout">
                <div class="md-layout-item md-size-33 md-xsmall-size-100" v-for="(item, i) in items" :key="i">
                  <router-link v-bind:to="{ name : 'search', query : { url: item.thumbnail}}"><img v-bind:src="item.thumbnail" alt="Rounded Image" class="rounded img-raised img-fluid"/></router-link>
                  <h4><md-button v-bind:to="{ name : 'search', query : { url: item.thumbnail}}" class="md-just-icon md-simple md-dribbble">
                      <i class="fa fa-search"></i>
                    </md-button>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  bodyClass: "landing-page",
  props: {
    header: {
      type: String,
      default: require("@/assets/img/bg7.jpg")
    }
  },
  data() {
    return {
      items: [
        {
          thumbnail:
            "https://iiif.dl.itc.u-tokyo.ac.jp/iiif/kunshujou/A00_6010/046/046_0052.tif/4117,620,2186,2324/,300/0/default.jpg"
        },
        {
          thumbnail:
            "https://iiif.dl.itc.u-tokyo.ac.jp/iiif/kunshujou/A00_6010/053/053_0162.tif/955,699,1920,1349/,300/0/default.jpg"
        },
        {
          thumbnail:
            "https://iiif.dl.itc.u-tokyo.ac.jp/iiif/kunshujou/A00_6010/049/049_0175.tif/5397,2787,2009,2541/,300/0/default.jpg"
        },
        {
          thumbnail:
            "https://iiif.dl.itc.u-tokyo.ac.jp/iiif/kunshujou/A00_6010/043/043_0100.tif/5348,2846,1093,1004/,300/0/default.jpg"
        },
        {
          thumbnail:
            "https://iiif.dl.itc.u-tokyo.ac.jp/iiif/kunshujou/A00_6010/026/026_0027.tif/3813,1735,2678,3432/,300/0/default.jpg"
        },
        {
          thumbnail:
            "https://iiif.dl.itc.u-tokyo.ac.jp/iiif/kunshujou/A00_6010/065/065_0024.tif/5259,1940,1644,1960/,300/0/default.jpg"
        }
      ]
    };
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    }
  }
};
</script>
<style lang="scss" scoped>
h1, h2 {
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
}
.page-header {
    height: 70vh;
}
</style>