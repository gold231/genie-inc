<template>
    <div>
        <div class="overflow-auto p-3">
            <p class="font-weight-bold float-left m-2">Documents : </p>
            <div class="float-left">
                <b-dropdown text="John.Doe.pdf" variant="outline" class="button-bold border w-100">
                </b-dropdown>
            </div>
            <b-button variant="outline" class="font-weight-bold">Télécharger</b-button>
        </div>
        <div class="pdf-viewer">
            <b-embed type="iframe" aspect="1by1" src="https://s25.q4cdn.com/967830246/files/doc_downloads/test.pdf" allowfullscreen></b-embed>
            <!-- <iframe src="https://s25.q4cdn.com/967830246/files/doc_downloads/test.pdf" width="100%" height="1000px"></iframe> -->
        </div>
    </div>
</template>

<style lang="scss" scoped>
</style>