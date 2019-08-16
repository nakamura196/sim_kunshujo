<template>
    <footer class="footer"
            :class="{[`footer-${type}`]: type}"
            :data-background-color="backgroundColor">
        <div class="container">
            <nav>
                <ul>
                    <li>
                        <a href="https://iiif.dl.itc.u-tokyo.ac.jp/repo/s/tanaka">
                            田中芳男・博物学コレクション
                        </a>
                    </li>
                    <li>
                        <a href="https://kunshujo.dl.itc.u-tokyo.ac.jp/">
                            電子展示『捃拾帖』
                        </a>
                    </li>
                    <li>
                        <a href="http://dl.ndl.go.jp/info:ndljp/pid/2610716">
                            国立国会図書館『張交帖』
                        </a>
                    </li>
                </ul>
            </nav>
            <div class="copyright">
                東京大学学術資産等アーカイブズ委員会事務局<br/>
                （東京大学附属図書館総務課／<br/>
                学術資産アーカイブ化推進室）<br/>
                E-mail：digital-archive [at] lib.u-tokyo.ac.jp
                <hr/>
                Design from <a href="https://www.creative-tim.com/">Creative Tim</a>.
            </div>
        </div>
    </footer>
</template>
<script>
export default {
  props: {
    backgroundColor: String,
    type: String
  },
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>
<style>
</style>
