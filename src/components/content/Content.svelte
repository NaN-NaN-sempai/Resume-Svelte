<script>
    import ItemIcon from "$components/flyout/components/ItemIcon.svelte";
    import Dot from "./components/Dot.svelte";

    export let title = "title";
    export let icon = "Declaration";
    export let plus = false;
    export let content = [
        {
            list: false,
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec elementum id metus ac fermentum. Nullam non tellus turpis. Proin a lacus rutrum, molestie quam id, imperdiet nunc. Praesent ullamcorper turpis non finibus convallis."
        },
    ];

    

    import translations from "$trad"; 

    let animTargetLists = [];
    let doAnimaiton;

    translations.subscribe(value => {
        doAnimaiton = true;

        animTargetLists.forEach(el => {
            if(!el) return;
            el.setAttribute("data-listanim", true);

            if(el.getAttribute("data-haslistener")) return;
            el.setAttribute("data-haslistener", true);

            el.addEventListener("animationend", () => {
                el.setAttribute("data-listanim", false);
            });            
        })

    });

	import { onMount } from "svelte";
    let animTarget = [];
    onMount(() => {
        doAnimaiton = false;
        animTarget.forEach(el => {
            el.addEventListener("animationend", () => doAnimaiton = false);
        });
    });
</script>


<div class="main">
    <div class="sliderWrapper">
        <div class="slider" />
    </div>

    <div class="split head">
        <div class="icon">
            <ItemIcon icon={icon} plus={plus} />
        </div>

        <div class="content {doAnimaiton? "textAnimation": ""}" bind:this={animTarget[animTarget.length]}>
            <h4 class="title">{title}</h4>
        </div>
    </div>

    {#each content as item}
        <div class="split body">
            <div class="icon">
                <Dot />
            </div>

            <div class="content{item.list? " list":""}">
                {#if item.title || item.type || item.time }
                    <div class="contentHeader {doAnimaiton? "textAnimation": ""}" bind:this={animTarget[animTarget.length]}>
                        {#if item.title} <span class="contentTitle"> {item.title} </span> {/if}
                        {#if item.type}  <span class="contentType">  {item.type}  </span> {/if}
                        {#if item.time}  <span class="contentTime">  {item.time}  </span> {/if}
                    </div>
                {/if}

                {#if item.list}
                    {#each item.content as listItem, index}
                        <span class="listItem" data-listanim="false" bind:this={animTargetLists[index]} style="--animDelay: {index+4};">
                            {listItem}
                        </span>
                    {/each}

                {:else}
                    <div class="contentText {doAnimaiton? "textAnimation": ""}" bind:this={animTarget[animTarget.length]}>
                        {@html item.content}
                    </div>
                {/if}
            </div>
        </div>
    {/each}

</div>


<style lang="scss">
    @use "$style/_fonts.scss";
    @use "$style/_defaults";
    @use "$style/_gradients" as gradients;
    @use "$style/_palette.scss" as palette;

    :root {
        --sliderWidth: 70px;
    }
    :global([data-listanim="true"]) {
        --animDelay: 1;
        animation: translationPulse calc(.2s * var(--animDelay)/5) calc(var(--animDelay)/30) ease;
    }
    .textAnimation {
        animation: translationPulse .2s ease;
    } 

    .content, .title {
        font-family: sansation;
        color: palette.$highlight;
        text-align: left;
        
    }

    :global(.contentText a) {
        color: palette.$highlight;
    }

    .title {
        font-size: 26px;
        text-transform: uppercase;
    }

    

    .split {
        display: flex;
        justify-content: flex-start;
        flex-direction: row;

        &.head {        
            flex-wrap: nowrap;
            align-items: flex-start;

            .icon {
                margin-top: 2px;
            }
        }

        &.body {
            margin-top: 10px;
            margin-bottom: 20px;

            .content {
                font-weight: normal;
                font-size: 23px;
                text-align: justify;
                width: 100%;

                .contentHeader {
                    margin-bottom: 10px;
                    display: flex;
                    flex-direction: column;
                    flex-wrap: wrap;
                    justify-content: space-between;

                    @mixin font {
                        font-family: sansation;
                        font-size: 20px;
                    }

                    .contentTitle {
                        @include font;
                        font-weight: bold;
                    }

                    .contentType {
                        @include font;
                        font-size: 17px;
                        text-transform: uppercase;
                        font-family: sansationLight;
                    }

                    .contentTime {
                        @include font;
                    }
                }

                &.list {
                    display: flex;
                    flex-wrap: wrap;
                    align-items: center;
                    justify-content: flex-start;

                    .listItem {
                        background: palette.$secondary;
                        margin: 5px;
                        font-size: 20px;
                        user-select: none;
                        
                        padding: 2px 5px;
                        border-radius: 7px;
                        box-shadow: -2px 2px 3px 1px rgba(0, 0, 0, 0.4);

                        z-index: 1;

                        --time: .2s;
                        transition:
                            box-shadow var(--time),
                            background var(--time);

                        cursor: url("$lib/assets/cursor/star.png") 23 23, wait;

                        &:hover {
                            color: palette.$primary;
                            background: gradients.$main;
                            box-shadow: 0px 0px 5px 2px palette.$highlight;
                        }
                    }
                }
            }
        }

        .icon {
            min-width: var(--sliderWidth);
            
            display: flex;
            flex-direction: column;
            align-items: center;

            position: relative;
        }

        .content {
            align-items: flex-start;
        }
    }

    .main {
        position: relative;
        margin-bottom: 20px;
    }
    .sliderWrapper {
        width: var(--sliderWidth);
        
        display: flex;
        flex-direction: column;
        align-items: center;

        position: absolute;
        height: 100%;

        .slider {
            width: 8px;
            height: calc(100% - 40px);
            margin-top: 15px;

            background: palette.$highlight;

            position: sticky;
            top: -18%;

            border-radius: 20px;
        }
    }

    
    @media only screen and (max-width: defaults.$mediaMaxWidth) {
        :root {
            --sliderWidth: 54px;
        }

        .split.body {
            margin-right: 20px;
            .content {
                text-align: left;

                &.list .listItem {
                    text-align: center;
                }
            }
        }
    }
    @media only screen and (max-width: defaults.$fontResize) {
        .title {
            font-size: 8vw;
        }

        .content {
            font-size: 7vw;
        }

        .contentHeader {
            .contentTitle {
                font-size: 6vw;
            }

            .contentType {
                font-size: 5vw;
            }

            .contentTime {
                font-size: 5vw;
            }
        }
    }
</style>